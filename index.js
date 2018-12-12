import fs from 'fs';

import { marbleMania, speedMarbleMania, parseInput } from './9';

const input = fs.readFileSync('input/9.txt', 'utf8');
const { numberOfPlayers, lastMarble } = parseInput(input);

console.log('A: ', marbleMania({ numberOfPlayers, lastMarble }));
console.log(
  'B: ',
  speedMarbleMania({ numberOfPlayers, lastMarble: lastMarble * 100 })
);
