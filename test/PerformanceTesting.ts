/*const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

describe("Staking Performance Tests", function () {
	let stakingOwner: any;
  	let user1: any;
  	let user2: any;
  	let name = "Xcoin";
  	let symbol = "XCN";
  	let initialSupply = 1000000;
  	let cap = 100000000000000;
  	let rewardRate = 1;
  	let staking: any;
	let web3: any;
   
	beforeEach(async function () {
	   	const Staking = await ethers.getContractFactory("Staking");
	   	const [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
	   	staking = await Staking.deploy("MyToken", "MTK", 1000000, 10000000, 100);
	   	await staking.deployed();
	   	stakingOwner = owner;
    	user1 = addr1;
    	user2 = addr2;
	   	web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/GDoO0h9_MiuHAB6YwoHX4seJHhhzPPxAn");
	});
   
	it("Should measure gas cost of staking", async function () {
		const tx = await staking.connect(user1).stake(BigNumber.from("1000"))
	   	const receipt = await tx.wait();
	   	console.log(`Gas used for staking: ${receipt.gasUsed.toString()}`);
	   	expect(receipt.gasUsed).to.be.lt(BigNumber.from("500000")); // Example threshold, adjust based on your expectations
	});
   
	it("Should measure gas cost of unstaking", async function () {
	   await staking.connect(user1).stake(BigNumber.from("1000"));
	   const tx = await staking.connect(user1).unstake(BigNumber.from("500"));
	   const receipt = await tx.wait();
	   console.log(`Gas used for unstaking: ${receipt.gasUsed.toString()}`);
	   expect(receipt.gasUsed).to.be.lt(BigNumber.from("300000")); // Example threshold, adjust based on your expectations
	});
   
	it('should measure the performance of a function', async function () {
		// Perform the function multiple times and measure the gas cost
		const iterations = 10;
		const gasCosts = [];
	
		for (let i = 0; i < iterations; i++) {
			const tx = await staking.connect(user1).stake(BigNumber.from("5"));
		  	const receipt = await web3.eth.getTransactionReceipt(tx.hash);
		  	gasCosts.push(receipt.gasUsed);
		}
	
		// Calculate the average gas cost
		const totalGasCost = gasCosts.reduce((a, b) => a + b, 0);
		const averageGasCost = totalGasCost / iterations;
	
		console.log(`Average gas cost: ${averageGasCost}`);
	  });
});*/
