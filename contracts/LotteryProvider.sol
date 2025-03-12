// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "./vendor/GelatoVRFConsumerBase.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "./IHouse.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract LotteryProvider is Initializable, UUPSUpgradeable, OwnableUpgradeable, GelatoVRFConsumerBase {
    IHouse public house;
    address private operatorAddr;
    
    struct Lottery {
        address entrance_token_address;
        uint128 fee_amount_per_ticket;
        uint128 ticket_price;
        uint32 max_tickets;
        uint32 sold_tickets;
        bool is_active;
        address[] participants;
        address winner;
    }

    mapping(bytes32 => Lottery) public lotteries; // lottery_id => lottery

    event LotteryOpened(bytes32 indexed lottery_id, uint128 ticket_price, uint128 fee_amount_per_ticket, uint32 max_tickets);
    event LotteryClosed(bytes32 indexed lottery_id);
    event TicketBought(bytes32 indexed lottery_id, address indexed buyer, uint32 tickets);
    event WinnerPaid(bytes32 indexed lottery_id, address indexed winner, uint256 amount);
    event LotteryNumberGenerated(address indexed requester, uint256 rNumber);
    event LotteryCanceled(bytes32 indexed lottery_id);
    event FeeCollected(address indexed collector, uint256 amount);
    event LotteryProviderUpdated(address indexed lottery_provider);

    constructor(address _operatorAddr) {
        require(_operatorAddr != address(0), "Invalid operator address");
        operatorAddr = _operatorAddr;
    }

    function version() public pure returns (string memory) {
        return "1.0.0";
    }
    
    function initialize() public initializer {
        __Ownable_init(msg.sender);
    }
    
    function setHouse(address _houseAddrs) external onlyOwner {
        require(_houseAddrs != address(0), "Invalid house address");
        house = IHouse(_houseAddrs);
    }

    function getOperator() external view returns (address) {
        return operatorAddr;
    }

    function _operator() internal view override returns (address) {
        return operatorAddr;
    }

    function createLottery(
        bytes32 lottery_id,
        address _entrance_token_address,
        uint128 _ticket_price,
        uint128 _fee_amount_per_ticket,
        uint32 _max_tickets
    ) external onlyOwner {
        require(lotteries[lottery_id].max_tickets == 0, "Lottery already exists");

        lotteries[lottery_id] = Lottery({
            entrance_token_address: _entrance_token_address,
            ticket_price: _ticket_price,
            fee_amount_per_ticket: _fee_amount_per_ticket,
            max_tickets: _max_tickets,
            sold_tickets: 0,
            is_active: true,
            participants: new address[](0),
            winner: address(0)
        });

        emit LotteryOpened(lottery_id, _ticket_price, _fee_amount_per_ticket, _max_tickets);
    }

    function buyTicket(bytes32 lottery_id, uint32 ticket_count) external {
        Lottery storage lottery = lotteries[lottery_id];
        require(lottery.is_active, "Lottery is closed");
        require(lottery.sold_tickets + ticket_count <= lottery.max_tickets, "Not enough tickets available");

        uint256 cost = ticket_count * lottery.ticket_price;
        require(IERC20(lottery.entrance_token_address).transferFrom(msg.sender, address(house), cost), "Payment failed");

        for (uint32 i = 0; i < ticket_count; i++) {
            lottery.participants.push(msg.sender);
        }

        lottery.sold_tickets += ticket_count;
        emit TicketBought(lottery_id, msg.sender, ticket_count);
    }
    
    function numberOfTicketsByAddress(bytes32 lottery_id, address participant) external view returns (uint32) {
        Lottery storage lottery = lotteries[lottery_id];
        require(lottery.is_active, "Lottery is closed");
        
        uint32 tickets = 0;
        for (uint32 i = 0; i < lottery.participants.length; i++) {
            if (lottery.participants[i] == participant) {
                tickets++;
            }
        }
        return tickets;
    }
    
    function requestCloseLottery(bytes32 lottery_id) external onlyOwner {
        require(lotteries[lottery_id].max_tickets > 0, "Lottery does not exist");
        require(lotteries[lottery_id].is_active, "Lottery is not active");
        require(lotteries[lottery_id].sold_tickets > 0, "No participants");

        _requestRandomness(abi.encode(lottery_id));
    }

    function _fulfillRandomness(uint256 randomness, uint256, bytes memory extraData) internal override {
        require(msg.sender == _operator(), "Only operator can fulfill randomness");
        bytes32 lottery_id = abi.decode(extraData, (bytes32));
        emit LotteryNumberGenerated(msg.sender, randomness);
        
        _closeLottery(lottery_id);
        _selectAndDistributeWinner(lottery_id, randomness);
    }
    
    function _closeLottery(bytes32 lottery_id) internal {
        Lottery storage lottery = lotteries[lottery_id];
        require(lottery.is_active, "Lottery already closed");

        lottery.is_active = false;
        emit LotteryClosed(lottery_id);
    }

    function _selectAndDistributeWinner(bytes32 lottery_id, uint256 random_number) internal {
        Lottery storage lottery = lotteries[lottery_id];
        require(!lottery.is_active, "Lottery must be closed first");
        require(lottery.sold_tickets > 0, "No participants");

        uint256 winnerIndex = random_number % lottery.sold_tickets;
        address winner = lottery.participants[winnerIndex];
        lottery.winner = winner;

        uint256 prizePool = lottery.ticket_price * lottery.sold_tickets;
        uint256 feeAmount = lottery.fee_amount_per_ticket * lottery.sold_tickets;
        uint256 prizeAmount = prizePool - feeAmount;

        // Distribute prize to winner
        house.distributePrize(lottery.entrance_token_address, winner, prizeAmount);
        
        house.collectFee(lottery.entrance_token_address, owner(), feeAmount);
        emit FeeCollected(owner(), feeAmount);
        emit WinnerPaid(lottery_id, winner, prizeAmount);
    }
    
    function cancelLottery(bytes32 lottery_id) external onlyOwner {
        Lottery storage lottery = lotteries[lottery_id];
        require(lottery.is_active, "Lottery is already closed");

        // Refund participants
        for (uint256 i = 0; i < lottery.participants.length; i++) {
            IERC20(lottery.entrance_token_address).transfer(lottery.participants[i], lottery.ticket_price);
        }

        lottery.is_active = false;
        emit LotteryCanceled(lottery_id);
    }

    function recoverERC20(address token_address, uint256 amount) external onlyOwner {
        require(token_address != address(0), "Invalid token address");
        require(amount > 0, "Amount must be greater than 0");

        require(IERC20(token_address).transfer(owner(), amount), "Withdrawal failed");
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}
}