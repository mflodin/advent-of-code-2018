import fs from "fs";

import { parseGuards, findSleepyGuard, findSleepyMinute } from "./4";

const input = fs.readFileSync("input/4.txt", "utf8");
const guards = parseGuards(input);

const sleepyGuard = findSleepyGuard(guards);
const sleepyMinute = findSleepyMinute(sleepyGuard, guards);

console.log(
  "A: ",
  sleepyGuard,
  sleepyMinute,
  Number(sleepyGuard) * sleepyMinute
);
