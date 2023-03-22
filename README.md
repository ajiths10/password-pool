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
