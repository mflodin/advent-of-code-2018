import { marbleMania, parseInput } from '../9';

test('marbleMania should report the winning score', () => {
  // expect(marbleMania('9 players; last marble is worth 9 points')).toBe(32);
  expect(
    marbleMania(parseInput('9 players; last marble is worth 25 points'))
  ).toBe(32);
  expect(
    marbleMania(parseInput('10 players; last marble is worth 1618 points'))
  ).toBe(8317);
  expect(
    marbleMania(parseInput('13 players; last marble is worth 7999 points'))
  ).toBe(146373);
  expect(
    marbleMania(parseInput('17 players; last marble is worth 1104 points'))
  ).toBe(2764);
  expect(
    marbleMania(parseInput('21 players; last marble is worth 6111 points'))
  ).toBe(54718);
  expect(
    marbleMania(parseInput('30 players; last marble is worth 5807 points'))
  ).toBe(37305);
});
