import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import { Staking } from "../typechain-types/contracts/Staking";
import { Staking__factory } from "../typechain-types/factories/contracts/Staking__factory";

task("deploy:Staking").setAction(async function (
  taskArguments: TaskArguments,
  { ethers }
) {
  const StakingFactory: Staking__factory = <
    Staking__factory
  >await ethers.getContractFactory("Staking");

  const Staking: Staking = <Staking>(
    await StakingFactory.deploy()
  );

  await Staking.deployed();

  console.log("Contract deployes to: ", Staking.address);
});