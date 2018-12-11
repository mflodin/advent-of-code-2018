import { log } from "./utils";

let index;

export function treeParser(input) {
  index = 0;
  const entries = input.split(" ").map(Number);

  return parser(entries);
}

export function metadataSum(tree) {
  return (
    tree.metadata.reduce((acc, curr) => acc + curr, 0) +
    tree.children.reduce((acc, curr) => acc + metadataSum(curr), 0)
  );
}

export function nodeValue(tree) {
  if (!tree) {
    return 0;
  }

  if (tree.children.length === 0) {
    return metadataSum(tree);
  }

  return tree.metadata.reduce(
    (acc, curr) => {
      let child = tree.children[curr - 1];
      return acc + nodeValue(child);
    },

    0
  );
}

function parser(entries) {
  let tree = { children: [], metadata: [] };
  const numberOfChildren = entries[index++];
  const numberOfMetadata = entries[index++];
  // log({ entries, numberOfChildren, numberOfMetadata });
  for (let i = 0; i < numberOfChildren; i++) {
    tree.children[i] = parser(entries);
  }
  for (let end = index + numberOfMetadata, i = 0; index < end; index++) {
    tree.metadata[i++] = entries[index];
  }

  return tree;
}
