import fs from 'fs';

import { visualize, tick, parseInput, runner } from './10';

const input = fs.readFileSync('input/10.txt', 'utf8');
const points = parseInput(input);

const seconds = runner(points);

console.log('A:\n' + visualize(points));
console.log('B: ' + seconds);
