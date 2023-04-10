// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./Token.sol";

/*
Using ReentrancyGuard and Pausable contracts from OpenZeppelin for
safe measures
*/

contract Staking is IERC20, Token, ReentrancyGuard, Pausable {
	struct user {
        uint256 stakedAmount;
        uint256 rewardAmount;
        uint256 lastRewardUpdate;
    }

	mapping(address => user) public users;

    uint256 public totalStakedAmount;
    uint256 public totalLoanedAmount;
    uint256 public rewardRate;
    uint256 public totalRewardAmount;
	
	constructor(
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply,
        uint256 _cap,
        uint256 _rewardRate
    ) Token(_name, _symbol, _initialSupply, _cap) {
        rewardRate = _rewardRate;
    }
}
