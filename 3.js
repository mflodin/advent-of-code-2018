export function claimFabric(input, fabric = []) {
  const claim = parseClaim(input);
  for (let x = claim.x; x < claim.x + claim.width; x++) {
    fabric[x] = fabric[x] || [];
    for (let y = claim.y; y < claim.y + claim.height; y++) {
      fabric[x][y] = fabric[x][y] || [];
      fabric[x][y].push(claim.id);
    }
  }
  return fabric;
}

function parseClaim(input) {
  return {
    id: input.match(/#(\d+)/)[1],
    x: Number(input.match(/@ (\d+)/)[1]),
    y: Number(input.match(/@ \d+,(\d+)/)[1]),
    width: Number(input.match(/: (\d+)/)[1]),
    height: Number(input.match(/: \d+x(\d+)/)[1])
  };
}

export function overlap(fabric) {
  return flatten(fabric).filter(p => p && p.length > 1).length;
}

function flatten(arr) {
  return [].concat(...arr);
}
