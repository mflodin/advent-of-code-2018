import fs from "fs";

import { scanner } from "./5";

const input = fs.readFileSync("input/5.txt", "utf8");
const result = scanner(input);

console.log("A: ", result, result.length);
