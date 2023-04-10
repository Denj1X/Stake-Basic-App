// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

/*
Using ERC20Capped for maximum cap per token
*/

contract Token is ERC20Capped, AccessControl {
	bytes32 public constant MINT_ROLE = keccak256("MINT_ROLE");
	event Mint(address indexed to, uint256 amount);

	constructor(string memory name, 
		string memory symbol, 
		uint256 initialSupply, 
		uint256 cap) ERC20(name, symbol) ERC20Capped(cap * (10 ** 18)) {
			if (initialSupply <= cap) {
            	ERC20._mint(_msgSender(), initialSupply * (10**18));
			}
	}

	function mint(address to, uint256 amount) public {
        require(hasRole(MINT_ROLE, msg.sender), "MyToken: must have MINT_ROLE to mint");
        _mint(to, amount);
        emit Mint(to, amount);
    }
}