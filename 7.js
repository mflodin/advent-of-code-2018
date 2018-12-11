import { log } from "./utils";

const CHARCODE_OFFSET = 64;

export function order(input) {
  const allSteps = getAllSteps(input);

  let str = "";
  while (allSteps.some((step) => !step.done)) {
    let next = allSteps
      .filter((step) => !step.done && hasNoNeeds(step))
      .sort(byId)[0];
    next.done = true;
    str += next.id;
  }

  return str;
}

function checkIfDone(step) {
  if (step && step.time === 0) {
    step.done = true;
  }
}

export function timer({ numberOfWorkers, input, delay }) {
  const allSteps = getAllSteps(input).map((step) => {
    step.time = delay + step.id.charCodeAt(0) - CHARCODE_OFFSET;
    return step;
  });
  const workers = createWorkers(numberOfWorkers);

  let time = 0;
  while (time < 1e3 && allSteps.some((step) => !step.done)) {
    let availableSteps = allSteps
      .filter((step) => !step.done && !step.worker && hasNoNeeds(step))
      .sort(byId);

    availableSteps.forEach((step) => {
      let availableWorker = workers.find((worker) => !worker.step);
      if (availableWorker) {
        availableWorker.step = step;
        step.worker = availableWorker;
      }
    });

    workers
      .filter((worker) => worker.step)
      .forEach((worker) => {
        let step = worker.step;
        step.time -= 1;
        if (step.time === 0) {
          step.done = true;
          worker.step = undefined;
          step.worker = undefined;
        }
      });
    time++;
  }
  return time;
}

function getAllSteps(input) {
  const steps = parseInput(input);
  const allSteps = steps.reduce(fromBothIdAndNeed, []).map(groupById(steps));
  // link to actual steps
  allSteps.forEach((step) => {
    step.needs = step.needs.map((p) => allSteps.find((s) => s.id === p));
  });
  allSteps.forEach((step) => {
    step.enables = allSteps.filter((s) => s.needs.includes(step));
  });
  return allSteps;
}

function groupById(steps) {
  return function(id) {
    const needs = steps
      .filter((s) => s.id === id)
      .reduce((acc, curr) => {
        acc.push(curr.need);
        return acc;
      }, []);
    return { id, needs, done: false };
  };
}

function fromBothIdAndNeed(acc, curr) {
  if (!acc.includes(curr.id)) {
    acc.push(curr.id);
  }
  if (!acc.includes(curr.need)) {
    acc.push(curr.need);
  }
  return acc;
}

function byId(a, b) {
  if (a.id > b.id) return 1;
  if (a.id < b.id) return -1;
  return 0;
}

function hasNoNeeds(step) {
  return step.needs.filter((s) => !s.done).length === 0;
}

function parseInput(input) {
  return input
    .split("\n")
    .filter((r) => r)
    .map((row) => {
      const [_, need, id] = row.match(/Step (.) .* step (.)/);
      return { id, need };
    });
}

function createWorkers(numberOfWorkers) {
  return new Array(numberOfWorkers).fill(1).map((_, id) => {
    return { id: id + 1, step: undefined };
  });
}
