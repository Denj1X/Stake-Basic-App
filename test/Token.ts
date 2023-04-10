import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";

describe("Token", function () {
  let token: Contract;
  let owner: Signer;
  let other: Signer;

  beforeEach(async function () {
    [owner, other] = await ethers.getSigners();

    // Deploy the contract
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy("My Token", "MTK", 1000, 2000);
    await token.deployed();
  });

  it("should have correct name, symbol, and decimals", async function () {
    expect(await token.name()).to.equal("My Token");
    expect(await token.symbol()).to.equal("MTK");
    expect(await token.decimals()).to.equal(18);
  });

  it("should mint tokens to the owner on deployment", async function () {
    expect(await token.balanceOf(await owner.getAddress())).to.equal(1000 * 10**18);
  });

  it("should not allow non-owners to mint tokens", async function () {
    await expect(token.connect(other).mint(await other.getAddress(), 100)).to.be.revertedWith("MyToken: must have MINT_ROLE to mint");
    expect(await token.totalSupply()).to.equal(1000 * 10**18);
  });

  it("should allow owners to mint tokens", async function () {
    await token.connect(owner).mint(await other.getAddress(), 100);
    expect(await token.balanceOf(await other.getAddress())).to.equal(100 * 10**18);
    expect(await token.totalSupply()).to.equal(1100 * 10**18);
  });

  it("should enforce the maximum cap per token", async function () {
    await expect(token.connect(owner).mint(await other.getAddress(), 1001)).to.be.revertedWith("ERC20Capped: cap exceeded");
    expect(await token.totalSupply()).to.equal(1000 * 10**18);
  });
});