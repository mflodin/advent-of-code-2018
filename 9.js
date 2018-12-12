import { log } from './utils';

export function marbleMania({ numberOfPlayers, lastMarble }) {
  const players = createPlayers(numberOfPlayers);
  let board = [0];
  let currentMarblePos = 1;
  let boardLength = 1;

  for (let marble = 1; marble <= lastMarble; marble++) {
    let player = players[marble % players.length];
    if (marble % 23 === 0 && marble !== 0) {
      currentMarblePos = (currentMarblePos - 7 + boardLength) % boardLength;
      let [removedMarble] = board.splice(currentMarblePos, 1);
      boardLength -= 1;

      player.score += marble + removedMarble;
    } else {
      currentMarblePos = (currentMarblePos + 2) % boardLength || boardLength;
      board.splice(currentMarblePos, 0, marble);
      boardLength += 1;
    }
  }

  return Math.max(...players.map(p => p.score));
}

export function speedMarbleMania({ numberOfPlayers, lastMarble }) {
  const players = createPlayers(numberOfPlayers);
  let root = { value: 0 };
  root.next = root;
  root.previous = root;
  let currentMarble = root;
  let before;
  let after;

  for (let marble = 1; marble <= lastMarble; marble++) {
    let player = players[marble % players.length];
    let newMarble = { value: marble };
    if (marble % 23 === 0 && marble !== 0) {
      let marbleToRemove =
        currentMarble.previous.previous.previous.previous.previous.previous
          .previous; // 7 steps counter-clockwise

      currentMarble = marbleToRemove.next;
      marbleToRemove.previous.next = marbleToRemove.next;
      marbleToRemove.next.previous = marbleToRemove.previous;
      player.score += marble + marbleToRemove.value;
    } else {
      before = currentMarble.next;
      after = before.next;
      newMarble.next = after;
      newMarble.previous = before;
      before.next = newMarble;
      after.previous = newMarble;
      currentMarble = newMarble;
    }
  }
  return Math.max(...players.map(p => p.score));
}

export function parseInput(input) {
  const [_, numberOfPlayers, lastMarble] = input
    .match(/(\d+).*worth (\d+)/)
    .map(Number);
  return { numberOfPlayers, lastMarble };
}

function createPlayers(numberOfPlayers) {
  return new Array(numberOfPlayers).fill(0).map((_, i) => ({
    id: i + 1,
    score: 0
  }));
}
