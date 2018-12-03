export function frequencyAdder(frequencies) {
  return frequencies
    .split(/\n|(?:, )/)
    .map(Number)
    .reduce((acc, curr) => acc + curr);
}

export function frequencyRepeater(input) {
  const frequencies = input
    .split(/\n|(?:, )/)
    .filter(l => l)
    .map(Number);

  let current = 0;
  let visited = [current];
  let index = 0;

  while (index < 1e9) {
    current = current + frequencies[index % frequencies.length];
    // console.log(index, current);
    if (visited.includes(current)) {
      return current;
    }
    visited.push(current);
    index += 1;
  }
}
