import {
  findBoundary,
  rowToCoordinate,
  fillGrid,
  findLargestArea,
  findAreaWithDistanceLessThan
} from "../6";

const input = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9
`;

const xy = (p) => ({ x: p.x, y: p.y });

test("rowToCoordinate should map an input row to a x,y coordinate", () => {
  expect(xy(rowToCoordinate("1, 1"))).toEqual({ x: 1, y: 1 });
  expect(xy(rowToCoordinate("5, 2"))).toEqual({ x: 5, y: 2 });
  expect(xy(rowToCoordinate("4, 9"))).toEqual({ x: 4, y: 9 });
});

test("findBoundary should find the edges of the area", () => {
  expect(findBoundary(input)).toEqual({ top: 1, bottom: 9, left: 1, right: 8 });
});

test("fillGrid should fill the grid with the closest coordinate", () => {
  const grid = fillGrid(input);
  const a = { x: 1, y: 1 };
  const b = { x: 1, y: 6 };
  const c = { x: 8, y: 3 };
  const d = { x: 3, y: 4 };
  const e = { x: 5, y: 5 };
  const f = { x: 8, y: 9 };

  expect(xy(grid[4][1][0])).toEqual(a);
  expect(xy(grid[6][1][0])).toEqual(c);
  expect(xy(grid[2][2][0])).toEqual(a);
  expect(xy(grid[3][2][0])).toEqual(d);
  expect(xy(grid[6][4][0])).toEqual(e);
  expect(xy(grid[7][4][0])).toEqual(c);
  expect(xy(grid[2][8][0])).toEqual(b);
  expect(xy(grid[4][8][0])).toEqual(e);
  expect(xy(grid[6][8][0])).toEqual(f);
});

test("findLargestArea should find the largest area that is not infinite", () => {
  expect(findLargestArea(input)).toBe(17);
});

test("findAreaWithDistanceLessThan should find the area of the region with distance less than x", () => {
  expect(findAreaWithDistanceLessThan(32, input)).toBe(16);
});
