/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 96 ms, faster than 96.67%
const deepestLeavesSum = root => {
  let queue = [root];

  while (queue.length) {
    let allLeaf = true;
    const cloneQueue = [...queue];
    queue = [];

    for (let i = 0; i < cloneQueue.length; i++) {
      if (cloneQueue[i].left) {
        queue.push(cloneQueue[i].left);
        allLeaf = false;
      }
      if (cloneQueue[i].right) {
        queue.push(cloneQueue[i].right);
        allLeaf = false;
      }
    }

    if (allLeaf) {
      return cloneQueue.reduce((acc, curr) => acc + curr.val, 0);
    }
  }
};

// Much intuitive
const deepestLeavesSum = root => {
  if (!root) return 0;

  let cache = [];
  const rec = (root, depth = 0) => {
    if (!root) return 0;

    cache[depth] = (cache[depth] || 0) + root.val;

    rec(root.left, depth + 1);
    rec(root.right, depth + 1);
  };

  rec(root);
  return cache[cache.length - 1];
};

// Recurse itself
const deepestLeavesSum = (root, arr = [], depth = 0) => {
  if (root === null) return;

  arr[depth] = (arr[depth] || 0) + root.val;
  deepestLeavesSum(root.left, arr, depth + 1);
  deepestLeavesSum(root.right, arr, depth + 1);

  return arr[arr.length - 1];
};
