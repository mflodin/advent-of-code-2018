import fs from "fs";

import { findLargestArea, findAreaWithDistanceLessThan } from "./6";

const input = fs.readFileSync("input/6.txt", "utf8");

console.log("A: ", findLargestArea(input));
console.log("B: ", findAreaWithDistanceLessThan(10000, input));
