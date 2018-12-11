import { treeParser, metadataSum, nodeValue } from "../8";

const input = "2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2";

test("treeParser should parse the tree", () => {
  const tree = treeParser(input);
  const A = tree;
  const [B, C] = A.children;
  const [D] = C.children;
  expect(A.metadata).toEqual([1, 1, 2]);
  expect(B.metadata).toEqual([10, 11, 12]);
  expect(C.metadata).toEqual([2]);
  expect(D.metadata).toEqual([99]);
});

test("metadataSum should sum all metadata", () => {
  const tree = treeParser(input);
  expect(metadataSum(tree)).toBe(138);
});

test("nodeValue should return the value of the node", () => {
  const tree = treeParser(input);
  expect(nodeValue(tree)).toBe(66);
});
