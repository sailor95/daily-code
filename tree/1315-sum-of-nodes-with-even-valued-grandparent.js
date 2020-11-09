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
// 112 ms, faster than 51.81%
const sumEvenGrandparent = root => {
  const queue = [];
  let ans = 0;

  queue.push(root);

  while (queue.length) {
    const node = queue.shift();

    if (node.val % 2 === 0) {
      ans +=
        (node.right?.right?.val ?? 0) +
        (node.right?.left?.val ?? 0) +
        (node.left?.right?.val ?? 0) +
        (node.left?.left?.val ?? 0);
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return ans;
};

const sumEvenGrandparent = (root, parent = null, grandparent = null) => {
  if (root === null) return 0;
  const val = grandparent === null || grandparent.val % 2 !== 0 ? 0 : root.val;
  return (
    val +
    sumEvenGrandparent(root.left, root, parent) +
    sumEvenGrandparent(root.right, root, parent)
  );
};
