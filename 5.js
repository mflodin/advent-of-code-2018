const opposites = {
  a: "A",
  A: "a",
  b: "B",
  B: "b",
  c: "C",
  C: "c",
  d: "D",
  D: "d",
  e: "E",
  E: "e",
  f: "F",
  F: "f",
  g: "G",
  G: "g",
  h: "H",
  H: "h",
  i: "I",
  I: "i",
  j: "J",
  J: "j",
  k: "K",
  K: "k",
  l: "L",
  L: "l",
  m: "M",
  M: "m",
  n: "N",
  N: "n",
  o: "O",
  O: "o",
  p: "P",
  P: "p",
  q: "Q",
  Q: "q",
  r: "R",
  R: "r",
  s: "S",
  S: "s",
  t: "T",
  T: "t",
  u: "U",
  U: "u",
  v: "V",
  V: "v",
  w: "W",
  W: "w",
  x: "X",
  X: "x",
  y: "Y",
  Y: "y",
  z: "Z",
  Z: "z"
};

export function scanner(polymer) {
  let newPolymer = "";
  for (let i = 0; i < polymer.length; i++) {
    if (opposites[polymer[i]] === polymer[i + 1]) {
      i++;
    } else {
      newPolymer += polymer[i];
    }
  }

  if (newPolymer.length !== polymer.length) {
    newPolymer = scanner(newPolymer);
  }

  return newPolymer;
}

export function improvedScanner(polymer) {
  const units = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let shortestLength = polymer.length;
  let bestCanditate = polymer;
  Array.from(units).forEach(unit => {
    let candidate = polymer.replace(new RegExp(unit, "ig"), "");
    candidate = scanner(candidate);

    if (candidate.length < shortestLength) {
      bestCanditate = candidate;
      shortestLength = candidate.length;
    }
  });
  return bestCanditate;
}
