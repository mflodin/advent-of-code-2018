import { frequencyAdder } from "../1a.js";

test("adds frequencies correctly", () => {
  expect(frequencyAdder("+1, -2, +3, +1")).toBe(3);
  expect(frequencyAdder("+1, +1, +1")).toBe(3);
  expect(frequencyAdder("+1, +1, -2")).toBe(0);
  expect(frequencyAdder("-1, -2, -3")).toBe(-6);
  expect(frequencyAdder("-1\n-2\n-3")).toBe(-6);
});
