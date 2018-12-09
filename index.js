import fs from "fs";

import { scanner, improvedScanner } from "./5";

const input = fs.readFileSync("input/5.txt", "utf8");
const result = scanner(input);

console.log("A: ", result, result.length);

const resultB = improvedScanner(input);
console.log("B:", resultB, resultB.length);
