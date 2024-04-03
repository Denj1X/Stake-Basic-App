import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "./tasks/deploy/Staking.ts";
import "@typechain/hardhat";
require("dotenv").config();

const chainIdSepolia = 11155111;

const getSepoliaConfig = () => {
  const url = process.env.SERVER_PROVIDER as string;

  return {
    accounts: process.env.PRIVATE_KEY
      ? [`${process.env.PRIVATE_KEY}`]
      : ["0x0000000000000000000000000000000000000000"],
    chainId: chainIdSepolia,
    url
  };
};

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    sepolia: getSepoliaConfig(),
  },
  typechain: {
	outDir: "typechain",
	target: "ethers-v5",
  },
  etherscan: {
    apiKey: process.env.ALCHEMY_API_KEY as string,
  },
};

export default config;