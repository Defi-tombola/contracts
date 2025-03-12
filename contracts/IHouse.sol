// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

interface IHouse {
    function distributePrize(address token, address winner, uint256 amount) external;
    function collectFee(address token, address lottery_owner, uint256 amount) external;
}