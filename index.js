import fs from "fs";

import { checksum, differsBySingleLetter, commonLetters } from "./2";

const input = fs.readFileSync("input/2.txt", "utf8");
console.log("A: ", checksum(input));
console.log(
  "B: ",
  commonLetters(differsBySingleLetter(input)),
  differsBySingleLetter(input)
);
