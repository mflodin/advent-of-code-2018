import { frequencyAdder } from "./1a";
import fs from "fs";

const input = fs.readFileSync("input/1a.txt", "utf8");
console.log(frequencyAdder(input));
