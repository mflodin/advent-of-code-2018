import { frequencyAdder, frequencyRepeater } from "../1.js";

test("adds frequencies correctly", () => {
  expect(frequencyAdder("+1, -2, +3, +1")).toBe(3);
  expect(frequencyAdder("+1, +1, +1")).toBe(3);
  expect(frequencyAdder("+1, +1, -2")).toBe(0);
  expect(frequencyAdder("-1, -2, -3")).toBe(-6);
  expect(frequencyAdder("-1\n-2\n-3")).toBe(-6);
});

test("finds repeated frequencies correctly", () => {
  expect(frequencyRepeater("+1, -2, +3, +1")).toBe(2);
  expect(frequencyRepeater("+1, -1")).toBe(0);
  expect(frequencyRepeater("+3, +3, +4, -2, -4")).toBe(10);
  expect(frequencyRepeater("-6\n+3, +8, +5\n-6\n")).toBe(5);
  expect(frequencyRepeater("+7, +7, -2, -7, -4")).toBe(14);
});
