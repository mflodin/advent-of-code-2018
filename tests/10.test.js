import { parseInput, visualize, tick, runner } from '../10';

const input = `position=< 9,  1> velocity=< 0,  2>
position=< 7,  0> velocity=<-1,  0>
position=< 3, -2> velocity=<-1,  1>
position=< 6, 10> velocity=<-2, -1>
position=< 2, -4> velocity=< 2,  2>
position=<-6, 10> velocity=< 2, -2>
position=< 1,  8> velocity=< 1, -1>
position=< 1,  7> velocity=< 1,  0>
position=<-3, 11> velocity=< 1, -2>
position=< 7,  6> velocity=<-1, -1>
position=<-2,  3> velocity=< 1,  0>
position=<-4,  3> velocity=< 2,  0>
position=<10, -3> velocity=<-1,  1>
position=< 5, 11> velocity=< 1, -2>
position=< 4,  7> velocity=< 0, -1>
position=< 8, -2> velocity=< 0,  1>
position=<15,  0> velocity=<-2,  0>
position=< 1,  6> velocity=< 1,  0>
position=< 8,  9> velocity=< 0, -1>
position=< 3,  3> velocity=<-1,  1>
position=< 0,  5> velocity=< 0, -1>
position=<-2,  2> velocity=< 2,  0>
position=< 5, -2> velocity=< 1,  2>
position=< 1,  4> velocity=< 2,  1>
position=<-2,  7> velocity=< 2, -2>
position=< 3,  6> velocity=<-1, -1>
position=< 5,  0> velocity=< 1,  0>
position=<-6,  0> velocity=< 2,  0>
position=< 5,  9> velocity=< 1, -2>
position=<14,  7> velocity=<-2,  0>
position=<-3,  6> velocity=< 2, -1>
`;

test('parser should parse the input correctly', () => {
  const result = parseInput(input);
  expect(result[0]).toEqual({
    x: 9,
    y: 1,
    vx: 0,
    vy: 2
  });
  expect(result[10]).toEqual({
    x: -2,
    y: 3,
    vx: 1,
    vy: 0
  });
  expect(result[20]).toEqual({
    x: 0,
    y: 5,
    vx: 0,
    vy: -1
  });
  expect(result[30]).toEqual({
    x: -3,
    y: 6,
    vx: 2,
    vy: -1
  });
});

test('visualize should show the ascii grid', () => {
  const asciiGrid = visualize(parseInput(input));
  expect(asciiGrid).toBe(
    `........#.............
................#.....
.........#.#..#.......
......................
#..........#.#.......#
...............#......
....#.................
..#.#....#............
.......#..............
......#...............
...#...#.#...#........
....#..#..#.........#.
.......#..............
...........#..#.......
#...........#.........
...#.......#..........
`
  );
});

test('tick should move the points with their velocity', () => {
  let points = parseInput(input);
  tick(points);
  expect(visualize(points)).toBe(`........#....#....
......#.....#.....
#.........#......#
..................
....#.............
..##.........#....
....#.#...........
...##.##..#.......
......#.#.........
......#...#.....#.
#...........#.....
..#.....#.#.......
`);
  tick(points);
  expect(visualize(points)).toBe(`..........#...
#..#...####..#
..............
....#....#....
..#.#.........
...#...#......
...#..#..#.#..
#....#.#......
.#...#...##.#.
....#.........
`);
  tick(points);
  expect(visualize(points)).toBe(`#...#..###
#...#...#.
#...#...#.
#####...#.
#...#...#.
#...#...#.
#...#...#.
#...#..###
`);
  tick(points);
  expect(visualize(points)).toBe(`........#....
....##...#.#.
..#.....#..#.
.#..##.##.#..
...##.#....#.
.......#....#
..........#..
#......#...#.
.#.....##....
...........#.
...........#.
`);
});

test('runner should find the smallest grid', () => {
  let points = parseInput(input);
  runner(points);
  expect(visualize(points)).toBe(`#...#..###
#...#...#.
#...#...#.
#####...#.
#...#...#.
#...#...#.
#...#...#.
#...#..###
`);
});

test('runner should count the number of seconds til the smallest grid', () => {
  let points = parseInput(input);
  let seconds = runner(points);
  expect(seconds).toBe(3);
});
