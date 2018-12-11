import { order, timer } from "../7";

const input = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.
`;

test("order should find the correct order to do the steps", () => {
  expect(order(input)).toBe("CABDFE");
});

test("timer should count how many seconds it takes to complete", () => {
  expect(timer({ numberOfWorkers: 2, delay: 0, input })).toBe(15);
});
