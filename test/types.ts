import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import type { Staking } from "../types/contracts/Staking";
import type { Token } from "../types/contracts/Token";

type Fixture<T> = () => Promise<T>;

declare module "mocha" {
  export interface Context {
    staking: Staking;
	token: Token;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}
