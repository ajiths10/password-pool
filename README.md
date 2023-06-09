## password-pool

> Password pool is a node js library for generating random and unique passwords.

## Install

```bash
$ npm install password-pool --save
```

## Usage

#### `generate()`

Generate one password with the given options. Returns a string.

```javascript
const Generate = require("password-pool");

let password = Generate();

// '8QRbxq#M'
console.log(password);
```

#### `Example()`

Working example which return ready to use random secure password

```javascript
/** @example 1 */

const Generate = require("password-pool");

let passwordReady = Generate(12); // default length will be 8

// 'dLaagIMRj$N6'
console.log(passwordReady);
```
