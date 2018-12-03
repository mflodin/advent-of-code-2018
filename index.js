import { frequencyAdder, frequencyRepeater } from "./1";
import fs from "fs";

const input = fs.readFileSync("input/1.txt", "utf8");
console.log("A: ", frequencyAdder(input));
console.log("B: ", frequencyRepeater(input));
