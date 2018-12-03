import fs from "fs";

import { claimFabric, overlap, nonOverlapping } from "./3";

const input = fs.readFileSync("input/3.txt", "utf8");
const rows = input.split("\n").filter(l => l);
let fabric;

rows.forEach(row => (fabric = claimFabric(row, fabric)));

console.log("A: ", overlap(fabric).length);
console.log("B: ", nonOverlapping(fabric));
