import fs from "fs";

import { treeParser, metadataSum, nodeValue } from "./8";

const input = fs.readFileSync("input/8.txt", "utf8");

const tree = treeParser(input);
console.log("A: ", metadataSum(tree));
console.log("B: ", nodeValue(tree));
