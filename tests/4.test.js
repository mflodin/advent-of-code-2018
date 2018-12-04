import {
  parseGuards,
  findSleepyGuard,
  findSleepyMinute,
  findSleepiestMinute
} from "../4";

const input = `[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up
`;

test("parseGuards should parse the list correctly", () => {
  const guards = parseGuards(input);
  // expect(guards['10'].dates["11-01"].guard).toBe("10");
  expect(guards["10"].dates["11-01"].asleep[1]).toBe(false);
  expect(guards["10"].dates["11-01"].asleep[4]).toBe(false);
  expect(guards["10"].dates["11-01"].asleep[5]).toBe(true);
  expect(guards["10"].dates["11-01"].asleep[14]).toBe(true);
  expect(guards["10"].dates["11-01"].asleep[24]).toBe(true);
  expect(guards["10"].dates["11-01"].asleep[25]).toBe(false);

  // expect(guards['10'].dates["11-02"].guard).toBe("99");
  expect(guards["99"].dates["11-02"].asleep[1]).toBe(false);
  expect(guards["99"].dates["11-02"].asleep[39]).toBe(false);
  expect(guards["99"].dates["11-02"].asleep[40]).toBe(true);
  expect(guards["99"].dates["11-02"].asleep[49]).toBe(true);
  expect(guards["99"].dates["11-02"].asleep[50]).toBe(false);
  expect(guards["99"].dates["11-02"].asleep[59]).toBe(false);

  // expect(guards['10'].dates["11-03"].guard).toBe("10");
  expect(guards["10"].dates["11-03"].asleep[1]).toBe(false);
  expect(guards["10"].dates["11-03"].asleep[23]).toBe(false);
  expect(guards["10"].dates["11-03"].asleep[24]).toBe(true);
  expect(guards["10"].dates["11-03"].asleep[28]).toBe(true);
  expect(guards["10"].dates["11-03"].asleep[29]).toBe(false);
  expect(guards["10"].dates["11-03"].asleep[59]).toBe(false);
});

test("parseGuards should count the number of minutes each guard sleeps", () => {
  const guards = parseGuards(input);
  expect(guards["10"].totalSleep).toBe(50);
  expect(guards["99"].totalSleep).toBe(30);
});

test("findSleepyGuard should find the sleepiest guard", () => {
  expect(findSleepyGuard(parseGuards(input))).toBe("10");
});

test("findSleepyMinute should find the sleepiest minute for each guard", () => {
  expect(findSleepyMinute("10", parseGuards(input)).minute).toBe(24);
  expect(findSleepyMinute("99", parseGuards(input)).minute).toBe(45);
});

test("findSleepiestMinute should find the sleepiest minute for all guards", () => {
  const sleepiestMinute = findSleepiestMinute(parseGuards(input));
  expect(sleepiestMinute.minute).toBe(45);
  expect(sleepiestMinute.sleep).toBe(3);
  expect(sleepiestMinute.guardId).toBe("99");
});
