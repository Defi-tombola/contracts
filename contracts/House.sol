// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";

contract House is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    mapping(address => mapping(address => uint256)) private balances; // user => token => balance
    address public lotteryProvider; // Only this address can distribute prizes

    event Deposited(address indexed user, address indexed token, uint256 amount);
    event Withdrawn(address indexed user, address indexed token, uint256 amount);
    event PrizeDistributed(address indexed winner, address indexed token, uint256 amount);
    event FeeDistributed(address indexed owner, address indexed token, uint256 amount);
    event Recover(address indexed token_address, uint256 token);
    event LotteryProviderUpdated(address indexed lottery_provider);

    function initialize(address _lotteryProvider) public initializer {
        __Ownable_init(msg.sender);
        lotteryProvider = _lotteryProvider;
    }

    /// @dev Allows only the LotteryProvider contract to distribute prizes
    function distributePrize(address token, address winner, uint256 amount) external {
        require(msg.sender == lotteryProvider, "Only LotteryProvider can distribute");
        require(IERC20(token).balanceOf(address(this)) >= amount, "Insufficient contract balance");

        require(IERC20(token).transfer(winner, amount), "Prize transfer failed");
        emit PrizeDistributed(winner, token, amount);
    }
    
    function collectFee(address token, address lottery_owner, uint256 amount) external {
        require(msg.sender == lotteryProvider, "Only LotteryProvider can distribute");
        require(IERC20(token).balanceOf(address(this)) >= amount, "Insufficient contract balance");

        require(IERC20(token).transfer(lottery_owner, amount), "Prize transfer failed");
        emit FeeDistributed(owner(), token, amount);
    }
    
    function recoverERC20(address token, uint256 amount) external onlyOwner {
        require(token != address(0), "Invalid token address");
        require(amount > 0, "Amount must be greater than 0");

        require(IERC20(token).transfer(owner(), amount), "Withdrawal failed");
    }
    /// @dev Allows the owner to update the LotteryProvider contract if needed
    function setLotteryProvider(address _lotteryProvider) external onlyOwner {
        require(_lotteryProvider != address(0), "Invalid lottery provider address");
        lotteryProvider = _lotteryProvider;
        emit LotteryProviderUpdated(_lotteryProvider);
    }

    /// @dev Required by the OZ UUPS module
    function _authorizeUpgrade(address) internal override onlyOwner {}
}