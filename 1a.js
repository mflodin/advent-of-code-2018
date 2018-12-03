export function frequencyAdder(frequencies) {
  return frequencies
    .split(/\n|(?:, )/)
    .map(Number)
    .reduce((acc, curr) => acc + curr);
}
