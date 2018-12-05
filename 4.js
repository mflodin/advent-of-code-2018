export function parseGuards(input) {
  const rows = input
    .split("\n")
    .filter(r => r)
    .sort();
  let result = {};
  let currentGuard;
  let fellAsleep;
  rows.forEach(row => {
    const [_, date, hour, minute, type, guard] = row.match(
      /.\d{4}-(\d\d-\d\d) (\d\d).(\d\d). (\w+) .(\w+)/
    );
    if (type === "Guard") {
      currentGuard = guard;
      result[guard] = result[guard] || { totalSleep: 0, dates: {} };
      return;
    }

    if (type === "falls") {
      result[currentGuard].dates[date] = result[currentGuard].dates[date] || {
        asleep: new Array(60).fill(false)
      };

      fellAsleep = Number(minute);
      return;
    }

    if (type === "wakes") {
      let woke = Number(minute);
      result[currentGuard].dates[date].asleep.fill(true, fellAsleep, woke);
      result[currentGuard].totalSleep += woke - fellAsleep;
    }
  });
  return result;
}

export function findSleepyGuard(input) {
  const guards = Object.keys(input);
  let maxSleep = 0;
  let topSleeper;
  guards.forEach(guard => {
    if (input[guard].totalSleep > maxSleep) {
      maxSleep = input[guard].totalSleep;
      topSleeper = guard;
    }
  });

  return topSleeper;
}

export function findSleepyMinute(guardId, input) {
  const guard = input[guardId];
  let maxSleep = 0;
  let candidate = 0;
  for (let m = 0; m < 60; m++) {
    let currentSleep = 0;
    Object.values(guard.dates).forEach(date => {
      if (date.asleep[m]) {
        currentSleep += 1;
      }
    });
    if (currentSleep > maxSleep) {
      maxSleep = currentSleep;
      candidate = m;
    }
  }

  return { minute: candidate, sleep: maxSleep };
}

export function findSleepiestMinute(guards) {
  return Object.keys(guards)
    .map(guardId => {
      return { ...findSleepyMinute(guardId, guards), guardId };
    })
    .reduce((acc, curr) => {
      return acc.sleep > curr.sleep ? acc : curr;
    });
}
