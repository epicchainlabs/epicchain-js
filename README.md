
<p align="center" style="font-size: 32px;">
  <strong>epicchain-js</strong>
</p>

<p align="center">
  Running EpicChain blockchain full node with Node.js and MongoDB.
</p>

<p align="center">
  <a href="https://badge.fury.io/js/%40epicchainlabs%2Fepicchain-js">
    <img src="https://badge.fury.io/js/%40epicchainlabs%2Fepicchain-js.svg" alt="npm version">
  </a>
</p>

## Overview

`epicchain-js` is a package designed to interface with the EpicChain blockchain in various ways configured by options used to initialize a node. Below are examples of different interaction mechanics, as detailed in the quickstart and examples.

## Getting Started

### Preparations

This module supports MongoDB for synchronizing the blockchain. Ensure you are connected to an instance of MongoDB 3.2+ to utilize its features.

### System Recommendations

- NodeJS 8+
- MongoDB 3.2+

## Installation

Install the package using:

```bash
$ npm install --save @epicchainlabs/epicchain-js
```

Alternatively, to access the latest available code, reference the git repository directly:

```bash
$ npm install --save git://github.com/epicchainlabs/epicchain-js.git#develop
```

## Quick Start

For comprehensive examples, visit the [`epicchain-js-examples`](https://github.com/rockacola/epicchain-js-examples) repository.

```js
const EpicChain = require('@epicchainlabs/epicchain-js').EpicChain;
```

To create a new blockchain instance:

```js
// Create a EpicChain instance to interface with RPC methods
const testnetEpicChain = new EpicChain({ network: 'testnet' });

// Wait for mesh to be ready before attempting to fetch block information
testnetEpicChain.mesh.on('ready', () => {
  testnetEpicChain.api.getBlockCount().then((res) => {
    console.log('Testnet getBlockCount:', res);
  });
});

// To connect to the mainnet:
const mainnetEpicChain = new EpicChain({ network: 'mainnet' });

mainnetEpicChain.mesh.on('ready', () => {
  mainnetEpicChain.api.getBlock(1000).then((res) => {
    console.log('Mainnet getBlock(1000).hash:', res.hash);
  });
});
```

This will create a new node instance and configure it to sync the blockchain to the defined MongoDB collections:

```js
const options = {
  network: 'testnet',
  storageType: 'mongodb',
  storageOptions: {
    connectionString: 'mongodb://localhost/epicchain_testnet',
  },
};

// Create a EpicChain instance
const epicchain = new EpicChain(options);

// Get block height
epicchain.storage.on('ready', () => {
  epicchain.storage.getHighestBlockHeight().then((res) => {
    console.log('Block height:', res);
  });
});
```

## Documentation

Project documentation is available at:

- [http://epicchainlabs.io/epicchain-js/](http://epicchainlabs.io/epicchain-js/)

Additional code examples can be found at:

- [https://github.com/rockacola/epicchain-js-examples](https://github.com/rockacola/epicchain-js-examples)

## Blockchain Bootstrap Files

Refer to the [Bootstrap Files document](https://github.com/epicchainlabs/epicchain-js/blob/master/BOOTSTRAP_FILES.md).

## Options

Refer to the [Optional Parameters document](https://github.com/epicchainlabs/epicchain-js/blob/master/OPTIONAL_PARAMETERS.md).

## Events

Refer to the [Event Emitters document](https://github.com/epicchainlabs/epicchain-js/blob/master/EVENT_EMITTERS.md).

## Contribution

`epicchain-js` encourages community code contributions. Before contributing, read the [contributor guidelines](https://github.com/epicchainlabs/epicchain-js/blob/master/.github/CONTRIBUTING.md) and search the issue tracker. To contribute, fork `epicchain-js`, commit your changes, and submit a pull request.

By contributing, you agree that your contributions will be licensed under the MIT license.

## License

- Open-source [MIT](https://github.com/epicchainlabs/epicchain-js/blob/master/LICENSE.md).
- Authors:
  - [@lllwvlvwlll](https://github.com/lllwvlvwlll)
  - [@rockacola](https://github.com/rockacola)

