import fs from "fs";

import { order, timer } from "./7";

const input = fs.readFileSync("input/7.txt", "utf8");

console.log("A: ", order(input));
console.log("B: ", timer({ numberOfWorkers: 5, delay: 60, input }));
