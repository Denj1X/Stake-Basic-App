import { ethers } from "hardhat";
import { expect } from "chai";

describe("Staking Contract Performance Testing", function () {
 let Staking: any;
 let staking: any;
 let owner: any;
 let addr1: any;
 let addr2: any;
 let addrs: any;

 beforeEach(async function () {
    const StakingFactory = await ethers.getContractFactory("Staking");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    staking = await StakingFactory.deploy("TestToken", "TT", 1000000, 1000000, 100);
    await staking.deployed();
 });

 // Existing tests...
 it("Should allow adding rewards", async function () {
    const tx = await staking.connect(owner).addReward(500);
	const receipt = await tx.wait();
	console.log(`Gas used for adding rewards: ${receipt.gasUsed.toString()}`);
    expect(await staking.totalRewardAmount()).to.equal(500);
 });

 it("Should not allow non-admin to add rewards", async function () {
    await expect(staking.connect(addr1).addReward(500)).to.be.revertedWith("You can't add a reward");
 });

 /*it("Should allow reinvesting rewards", async function () {
    await staking.connect(addr1).stake(1000);
    await staking.addReward(1000);
    await staking.connect(addr1).reinvestReward();
    expect(await staking.users(addr1.address)).to.have.property("stakedAmount", 2000);
 });

 it("Should not allow unstaking more than staked amount", async function () {
    await staking.connect(addr1).stake(1000);
    await expect(staking.connect(addr1).unstake(1500)).to.be.revertedWith("You don't have enough staked amount to unstake!");
 });*/

 it("Should not allow withdrawing reward without staking", async function () {
    await expect(staking.connect(addr1).withdrawReward()).to.be.revertedWith("You must stake before withdrawing the reward!");
 });

 it("Should not allow reinvesting reward without staking", async function () {
    await expect(staking.connect(addr1).reinvestReward()).to.be.revertedWith("You must stake before reinvesting the reward!");
 });
});