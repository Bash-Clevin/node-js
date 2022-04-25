// npm - global command, comes with node
// npm i <packageName>          - install as a local depednency
// npm install -g <packageName>  - install package as a global dependency

// package.json         - manifest file that stores projeect/package info
// installation
// manual approach      - create package.json in root folder and add properties
// npm init             - guided step by step
// npm init -y          - everything will be set to default

// uninstall package
// npm uninstall <packageName>

// Dev dependencies used only in development env ie nodemon, linting, formatting etc
// install dev dependency
// npm i <packageName> -D 
// npm i <packageName> --save-dev

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)