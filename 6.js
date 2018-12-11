import { log } from "./utils";

export function rowToCoordinate(row) {
  const [_, x, y] = row.match(/(\d+), (\d+)/).map(Number);
  return { x, y, p: 0 };
}

function inputToCoordinates(input) {
  return input
    .split("\n")
    .filter((r) => r)
    .map(rowToCoordinate);
}

export function findBoundary(input) {
  const coordinates = inputToCoordinates(input);
  const xs = coordinates.map((c) => c.x);
  const ys = coordinates.map((c) => c.y);
  return {
    top: Math.min(...ys),
    bottom: Math.max(...ys),
    left: Math.min(...xs),
    right: Math.max(...xs)
  };
}

export function fillGrid(input) {
  let grid = [];
  grid.inputCoordinates = inputToCoordinates(input);
  const { top, bottom, left, right } = findBoundary(input);

  for (let x = left; x <= right; x++) {
    grid[x] = [];
    for (let y = top; y <= bottom; y++) {
      let minDistance = Math.max(bottom, right);
      let candidates = [];
      grid.inputCoordinates.forEach((coord) => {
        const distance = Math.abs(coord.x - x) + Math.abs(coord.y - y);
        if (distance === minDistance) {
          candidates.push(coord);
        }
        if (distance < minDistance) {
          minDistance = distance;
          candidates = [coord];
        }
      });
      if (candidates.length === 1) {
        candidates[0].p += 1;
      }
      grid[x][y] = candidates;
    }
  }
  return grid;
}

function checkInfinite(coord, infiniteAreas) {
  if (
    coord !== undefined &&
    coord.length === 1 &&
    !infiniteAreas.includes(coord[0])
  ) {
    infiniteAreas.push(coord[0]);
  }
}

export function findLargestArea(input) {
  const { top, bottom, left, right } = findBoundary(input);
  const grid = fillGrid(input);
  const infiniteAreas = [];

  for (let x = left; x <= right; x++) {
    checkInfinite(grid[x][top], infiniteAreas);
    checkInfinite(grid[x][bottom], infiniteAreas);
  }

  for (let y = top; y <= bottom; y++) {
    checkInfinite(grid[left][y], infiniteAreas);
    checkInfinite(grid[right][y], infiniteAreas);
  }

  const finiteAreas = grid.inputCoordinates
    .filter((coord) => !infiniteAreas.includes(coord))
    .map((coord) => coord.p);

  return Math.max(...finiteAreas);
}

export function findAreaWithDistanceLessThan(limit, input) {
  let area = 0;
  const grid = fillGrid(input);
  const { top, bottom, left, right } = findBoundary(input);

  for (let x = left; x <= right; x++) {
    for (let y = top; y <= bottom; y++) {
      let distance = 0;
      grid.inputCoordinates.forEach((coord) => {
        distance += Math.abs(coord.x - x) + Math.abs(coord.y - y);
      });
      if (distance < limit) {
        area += 1;
      }
    }
  }

  return area;
}
