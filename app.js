require("./xyz.js");
// const { x, calculateSum } = require("./calculate.js");

// import { x, calculateSum } from "./calculate/calculate.js";

const { multiply, calculateSum } = require("./calculate/index");

const data = require("./data.json");

console.log(data);

const util = require("node:util")

const name = "abhishek";

const a = 10;
const b = 20;

calculateSum(a, b);

multiply(a, b);

console.log(globalThis === global);
