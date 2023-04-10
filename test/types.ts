import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import type { Staking } from "../types/contracts/Staking";

type Fixture<T> = () => Promise<T>;

declare module "mocha" {
  export interface Context {
    staking: Staking;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}
