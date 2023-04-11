# Hardhat Template [![Open in Gitpod][gitpod-badge]][gitpod] [![Github Actions][gha-badge]][gha] [![Hardhat][hardhat-badge]][hardhat] [![License: MIT][license-badge]][license]

[gitpod]: https://gitpod.io/#https://github.com/paulrberg/hardhat-template
[gitpod-badge]: https://img.shields.io/badge/Gitpod-Open%20in%20Gitpod-FFB45B?logo=gitpod
[gha]: https://github.com/paulrberg/hardhat-template/actions
[gha-badge]: https://github.com/paulrberg/hardhat-template/actions/workflows/ci.yml/badge.svg
[hardhat]: https://hardhat.org/
[hardhat-badge]: https://img.shields.io/badge/Built%20with-Hardhat-FFDB1C.svg
[license]: https://opensource.org/licenses/MIT
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg

A Hardhat-based template for developing Solidity smart contracts, with sensible defaults.

- [Hardhat](https://github.com/nomiclabs/hardhat): compile, run and test smart contracts
- [TypeChain](https://github.com/ethereum-ts/TypeChain): generate TypeScript bindings for smart contracts
- [Ethers](https://github.com/ethers-io/ethers.js/): renowned Ethereum library and wallet implementation
- [Solhint](https://github.com/protofire/solhint): code linter
- [Solcover](https://github.com/sc-forks/solidity-coverage): code coverage
- [Prettier Plugin Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity): code formatter

## Getting Started

Hi! My name is Matei-Alexandru Biciusca, and I created a basic staking app, with different functionalities.
I used this [`template`](https://github.com/paulrberg/hardhat-template/generate) in order to work with Solidity contracts, with Typescript tests and deploying, using Hardhat in the same time.

# App Features
This is a basic staking app, for staking tokens and earning rewards. Users can stake their tokens and earn rewards based on the reward rate set by the admin. The contracts are written in Solidity and use the OpenZeppelin library for security and access control.

The app has the following features:

- [X] ERC20 Contract - A basic ERC20 contract, with a maximum cap and a mint function from ERC20. It has AccessControl, because only a certain minter (the owner), can actually supply with tokens. The ```Token.sol``` contract includes what I mentioned earlier. ERC20Capped inherited most of the functions and methods from ERC20, so we won't have a problem whether including ERC20 or not in the main contract.

- [X] Staking Contract -  The contract ```Staking.sol``` which includes the actual app features.
	- [X] Roles: The contract has an access control mechanism using the ```AccessControl``` contract from `OpenZeppelin`, where the admin role is defined as `ADMIN_ROLE`.
	- [X] Small security measures: The contract uses the `ReentrancyGuard` and `Pausable` contracts from `OpenZeppelin` for additional security measures.
	- [X] Setting the reward: The contract has a reward rate set by the admin and the admin can add more reward tokens to the contract by calling the `addReward` function.
	- [X] User features: Users can stake, unstake, withdraw their reward, and reinvest their reward.
		- [X] Staking: Users can stake their tokens by calling the stake function and providing the amount to be staked.
		- [X] Unstaking: Users can unstake their tokens by calling the `unstake` function and providing the amount to be unstaked.
		- [X] Withdrawing: Users can withdraw their earned rewards by calling the `withdrawReward` function.
		- [X] Reinvesting: Users can reinvest their earned rewars by calling the `reinvestReward` function. This functionality is similar to a restake.
	- [X] Tracking: The contract maintains a `mapping` of each user and their `stakedAmount`, `rewardAmount`, and `lastRewardUpdate`. The `totalStakedAmount`, `totalLoanedAmount`, `rewardRate`, and `totalRewardAmount` are also tracked.
	- [X] Rewarding: The reward is computed based on the amount staked, the rewardRate, and the time since the last reward update. When a user unstakes their tokens, the reward is added to their balance if they have staked before, and if they have no stake and reward, the reward is sent directly to them.
	- [ ] Time conditioning: The contract has a cooldown period of 1 day for unstaking, withdrawing or reinvesting rewards to prevent abuse.
## Usage

### Pre Requisites

Before being able to run any command, you need to create a `.env` file and set a BIP-39 compatible mnemonic as an
environment variable. You can follow the example in `.env.example`. If you don't already have a mnemonic, you can use
this [website](https://iancoleman.io/bip39/) to generate one.

Then, proceed with installing dependencies:

```sh
$ pnpm install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ pnpm compile
```

### TypeChain

Compile the smart contracts and generate TypeChain bindings:

```sh
$ pnpm typechain
```

### Test

Run the tests with Hardhat:

```sh
$ pnpm test
```

### Lint Solidity

Lint the Solidity code:

```sh
$ pnpm lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
$ pnpm lint:ts
```

### Coverage

Generate the code coverage report:

```sh
$ pnpm coverage
```

### Report Gas

See the gas usage per unit test and average gas per method call:

```sh
$ REPORT_GAS=true pnpm test
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
$ pnpm clean
```

### Deploy

Deploy the contracts to Hardhat Network:

```sh
$ pnpm deploy --greeting "Bonjour, le monde!"
```

## Tips

### Syntax Highlighting

If you use VSCode, you can get Solidity syntax highlighting with the
[hardhat-solidity](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) extension.

## Using GitPod

[GitPod](https://www.gitpod.io/) is an open-source developer platform for remote development.

To view the coverage report generated by `pnpm coverage`, just click `Go Live` from the status bar to turn the server
on/off.

## License

This project is licensed under MIT.
