import { scanner } from "../5";

test("scanner should remove units of opposite polarity", () => {
  expect(scanner("aA")).toBe("");
  expect(scanner("abBA")).toBe("");
  expect(scanner("abAB")).toBe("abAB");
  expect(scanner("aabAAB")).toBe("aabAAB");
  expect(scanner("dabAcCaCBAcCcaDA")).toBe("dabCBAcaDA");
  expect(scanner("aaaAAA")).toBe("");
});
