import { log } from './utils';

export function parseInput(input) {
  return input
    .split('\n')
    .filter(r => r)
    .map(row => {
      const [_, x, y, vx, vy] = row
        .match(/.(-?\d+).*?(-?\d+).*?(-?\d+).*?(-?\d+)/)
        .map(Number);
      return { x, y, vx, vy };
    });
}

export function visualize(points) {
  const xs = points.map(point => point.x);
  const ys = points.map(point => point.y);
  const xMax = Math.max(...xs);
  const xMin = Math.min(...xs);
  const yMax = Math.max(...ys);
  const yMin = Math.min(...ys);

  let grid = [];

  for (let y = yMin; y <= yMax; y++) {
    grid[y] = [];
    for (let x = xMin; x <= xMax; x++) {
      grid[y][x] = '.';
    }
  }

  points.forEach(point => {
    grid[point.y][point.x] = '#';
  });

  let str = '';
  for (let y = yMin; y <= yMax; y++) {
    for (let x = xMin; x <= xMax; x++) {
      str += grid[y][x];
    }
    str += '\n';
  }

  return str;
}

export function tick(points) {
  points.forEach(point => {
    point.x += point.vx;
    point.y += point.vy;
    point.nx = point.x + point.vx;
    point.ny = point.y + point.vy;
  });
  return points;
}

export function runner(points) {
  for (let i = 0; i < 1e6; i++) {
    const ys = points.map(point => point.y);
    const yMax = Math.max(...ys);
    const yMin = Math.min(...ys);
    const ySpan = yMax - yMin;
    const nys = points.map(point => point.ny);
    const nyMax = Math.max(...nys);
    const nyMin = Math.min(...nys);
    const nySpan = nyMax - nyMin;
    if (nySpan > ySpan) {
      return i;
    }
    tick(points);
  }
}
