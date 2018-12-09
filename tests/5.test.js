import { scanner, improvedScanner } from "../5";

test("scanner should remove units of opposite polarity", () => {
  expect(scanner("aA")).toBe("");
  expect(scanner("abBA")).toBe("");
  expect(scanner("abAB")).toBe("abAB");
  expect(scanner("aabAAB")).toBe("aabAAB");
  expect(scanner("dabAcCaCBAcCcaDA")).toBe("dabCBAcaDA");
  expect(scanner("aaaAAA")).toBe("");
});

test("improvedScanner should find the shortest possible polymer when removing a unit type", () => {
  expect(improvedScanner("dabAcCaCBAcCcaDA")).toBe("daDA");
});
