import {
  hasExactlyTwoOfAnyLetter,
  hasExactlyThreeOfAnyLetter,
  checksum,
  differsBySingleLetter,
  commonLetters
} from "../2";

test("it should find all codes with exacly two letters", () => {
  expect(hasExactlyTwoOfAnyLetter("abcdef")).toBe(false);
  expect(hasExactlyTwoOfAnyLetter("bababc")).toBe(true);
  expect(hasExactlyTwoOfAnyLetter("abbcde")).toBe(true);
  expect(hasExactlyTwoOfAnyLetter("abcccd")).toBe(false);
  expect(hasExactlyTwoOfAnyLetter("aabcdd")).toBe(true);
  expect(hasExactlyTwoOfAnyLetter("abcdee")).toBe(true);
  expect(hasExactlyTwoOfAnyLetter("ababab")).toBe(false);
});

test("it should find all codes with exacly three letters", () => {
  expect(hasExactlyThreeOfAnyLetter("abcdef")).toBe(false);
  expect(hasExactlyThreeOfAnyLetter("bababc")).toBe(true);
  expect(hasExactlyThreeOfAnyLetter("abbcde")).toBe(false);
  expect(hasExactlyThreeOfAnyLetter("abcccd")).toBe(true);
  expect(hasExactlyThreeOfAnyLetter("aabcdd")).toBe(false);
  expect(hasExactlyThreeOfAnyLetter("abcdee")).toBe(false);
  expect(hasExactlyThreeOfAnyLetter("ababab")).toBe(true);
});

test("checksum should calculate checksum correctly", () => {
  expect(
    checksum("abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab")
  ).toBe(12);
});

test("it chould find the two codes differing by a single letter", () => {
  const codes = ["abcde", "fghij", "klmno", "pqrst", "fguij", "axcye", "wvxyz"];
  expect(differsBySingleLetter(codes.join("\n"))).toEqual(["fghij", "fguij"]);
});

test("it chould find the common letters", () => {
  const codes = ["fghij", "fguij"];
  expect(commonLetters(codes)).toBe("fgij");
});
