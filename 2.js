export function hasExactlyTwoOfAnyLetter(code) {
  return hasExactlyXOfAnyLetter(2, code);
}
export function hasExactlyThreeOfAnyLetter(code) {
  return hasExactlyXOfAnyLetter(3, code);
}

export function checksum(list) {
  const rows = list.split("\n");
  const twos = rows.filter(hasExactlyTwoOfAnyLetter).length;
  const threes = rows.filter(hasExactlyThreeOfAnyLetter).length;
  return twos * threes;
}

function hasExactlyXOfAnyLetter(number, code) {
  const letters = code.split("");
  let count = letters.reduce((acc, letter) => {
    acc[letter] = 1 + (acc[letter] || 0);
    return acc;
  }, {});

  return Object.keys(count).some(letter => count[letter] === number);
}

export function differsBySingleLetter(list) {
  const rows = list.split("\n").filter(l => l);
  for (let candidate of rows) {
    for (let row of rows) {
      let diffCount = 0;
      for (let i = row.length; i > 0; i--) {
        if (candidate[i] !== row[i]) {
          diffCount += 1;
        }
      }
      if (diffCount === 1) {
        return [candidate, row];
      }
    }
  }
  return rows;
}

export function commonLetters([a, b]) {
  return Array.from(a)
    .filter((_, i) => a[i] === b[i])
    .join("");
}
