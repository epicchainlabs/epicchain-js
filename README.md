<p align="center">
  <img
    src="https://raw.githubusercontent.com/epicchainlabs/visual-identity/develop/_CoZ%20Branding/_Logo/_Logo%20icon/_PNG%20200x178px/CoZ_Icon_DARKBLUE_200x178px.png"
    width="125px;">
</p>

<h1 align="center">epicchain-js</h1>

<p align="center">
  EpicChain JavaScript SDK.
</p>

<p align="center">
  <a href="https://circleci.com/gh/epicchainlabs/epicchain-js">
    <img src="https://circleci.com/gh/epicchainlabs/epicchain-js.svg?style=svg">
  </a>
</p>

# Overview

This is the JS SDK for the NEO blockchain platform. This project aims to be a lightweight library focused on providing blockchain interactions in the browser.

It is currently in use by [epicchain](https://github.com/epicchainlabs/epicchain-wallet/).

Visit the [docs](https://dojo.coz.io/neo3/epicchain-js/index.html) to learn how to use this library!

# Getting started

## Installation

### Nodejs

```bash
npm i @epicchainlabs/epicchain-js
```

### Browser through CDN

```html
<script src="https://unpkg.com/@epicchainlabs/epicchain-js" />
```

## Usage

### Nodejs

```js
import {
    default as epicchain
} from "@epicchainlabs/epicchain-js";
const acct = epicchain.create.account("NKuyBkoGdZZSLyPbJEetheRhMjeznFZszf");
```

### Browser

Once imported using the script tag, the module is available as a global object `epicchain` .

```js
console.log(epicchain);
var acct = epicchain.create.account("NKuyBkoGdZZSLyPbJEetheRhMjeznFZszf");
```

> **Note**
> For most use-cases, we recommend `epicchain-js` .
> Do not use `epicchain-js` and `epicchain-core` in the same project.  The classes are not cross-package compatible. See https://github.com/epicchainlabs/epicchain-js/issues/850.

# Contributing

Please refer to [ `CONTRIBUTING` ](./CONTRIBUTING.md) for development practices.

## Setup

This repository is a typescript mono-repo using Lerna. Please ensure the following is installed:

* Node (latest LTS aka v18 at time of writing)

> `lerna` is optional and only required for advanced operations.

```sh
git clone https://github.com/epicchainlabs/epicchain-js.git
cd epicchain-js
yarn
npm run bootstrap
npm run build
```

## Testing

```sh
npm run lint
npm run build
npm run dist
npm run test:unit
npm run test:integration
```

# Docs

We use Docusaurus for our docs website. The docs are stored in `./docs` while the main website and its configuration is in `./website` .

```sh
cd website
yarn
npm run start
```

# License
* Open-source [MIT](https://github.com/epicchainlabs/epicchain-js/blob/master/LICENSE.md).
* Main author and maintainer is [Yak Jun Xiang](https://github.com/snowypowers).
