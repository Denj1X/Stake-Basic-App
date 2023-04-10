import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import type { Staking } from "../types/contracts/Staking.ts";
import type { Staking__factory } from "../types/factories/Staking__factory";

task("deploy:Staking").setAction(async function (
  taskArguments: TaskArguments,
  { ethers }
) {
  const CharityCampaignsFactory: Staking__factory = <
    Staking__factory
  >await ethers.getContractFactory("CharityCampaigns");

  const CharityCampaigns: Staking = <Staking>(
    await CharityCampaignsFactory.deploy()
  );

  await CharityCampaigns.deployed();

  console.log("Contract deployes to: ", CharityCampaigns.address);
});