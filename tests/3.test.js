import { claimFabric, overlap } from "../3";

test("it claims its part of the fabric", () => {
  let fabric = claimFabric("#123 @ 3,2: 5x4");
  expect(fabric[3][2]).toEqual(["123"]);
  expect(fabric[3][3]).toEqual(["123"]);
  expect(fabric[3][4]).toEqual(["123"]);
  expect(fabric[3][5]).toEqual(["123"]);
  expect(fabric[4][2]).toEqual(["123"]);
  expect(fabric[4][3]).toEqual(["123"]);
  expect(fabric[4][4]).toEqual(["123"]);
  expect(fabric[4][5]).toEqual(["123"]);
  expect(fabric[5][2]).toEqual(["123"]);
  expect(fabric[5][3]).toEqual(["123"]);
  expect(fabric[5][4]).toEqual(["123"]);
  expect(fabric[5][5]).toEqual(["123"]);
  expect(fabric[6][2]).toEqual(["123"]);
  expect(fabric[6][3]).toEqual(["123"]);
  expect(fabric[6][4]).toEqual(["123"]);
  expect(fabric[6][5]).toEqual(["123"]);
  expect(fabric[7][2]).toEqual(["123"]);
  expect(fabric[7][3]).toEqual(["123"]);
  expect(fabric[7][4]).toEqual(["123"]);
  expect(fabric[7][5]).toEqual(["123"]);
});

test("it handles multiple claims", () => {
  let fabric = claimFabric("#1 @ 1,3: 4x4");
  fabric = claimFabric("#2 @ 3,1: 4x4", fabric);
  fabric = claimFabric("#3 @ 5,5: 2x2", fabric);

  expect(fabric[1][3]).toEqual(["1"]);
  expect(fabric[1][4]).toEqual(["1"]);
  expect(fabric[1][5]).toEqual(["1"]);
  expect(fabric[1][6]).toEqual(["1"]);
  expect(fabric[2][3]).toEqual(["1"]);
  expect(fabric[2][4]).toEqual(["1"]);
  expect(fabric[2][5]).toEqual(["1"]);
  expect(fabric[2][6]).toEqual(["1"]);
  expect(fabric[3][5]).toEqual(["1"]);
  expect(fabric[3][6]).toEqual(["1"]);
  expect(fabric[4][5]).toEqual(["1"]);
  expect(fabric[4][6]).toEqual(["1"]);

  expect(fabric[3][3]).toEqual(["1", "2"]);
  expect(fabric[3][4]).toEqual(["1", "2"]);
  expect(fabric[4][3]).toEqual(["1", "2"]);
  expect(fabric[4][4]).toEqual(["1", "2"]);

  expect(fabric[3][1]).toEqual(["2"]);
  expect(fabric[3][2]).toEqual(["2"]);
  expect(fabric[4][1]).toEqual(["2"]);
  expect(fabric[4][2]).toEqual(["2"]);
  expect(fabric[5][1]).toEqual(["2"]);
  expect(fabric[5][2]).toEqual(["2"]);
  expect(fabric[5][3]).toEqual(["2"]);
  expect(fabric[5][4]).toEqual(["2"]);
  expect(fabric[6][1]).toEqual(["2"]);
  expect(fabric[6][2]).toEqual(["2"]);
  expect(fabric[6][3]).toEqual(["2"]);
  expect(fabric[6][4]).toEqual(["2"]);

  expect(fabric[5][5]).toEqual(["3"]);
  expect(fabric[5][6]).toEqual(["3"]);
  expect(fabric[6][5]).toEqual(["3"]);
  expect(fabric[6][6]).toEqual(["3"]);
});

test("it counts the number of overlapping squares", () => {
  let fabric = claimFabric("#1 @ 1,3: 4x4");
  fabric = claimFabric("#2 @ 3,1: 4x4", fabric);
  fabric = claimFabric("#3 @ 5,5: 2x2", fabric);

  expect(overlap(fabric)).toBe(4);
});
