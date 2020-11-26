/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

// Simple dfs, 300 ms, faster than 92.90%
const getTargetCopy = (original, cloned, target) => {
  if (!cloned) return null;
  if (target.val === cloned.val) return cloned;
  return (
    getTargetCopy(original, cloned.left, target) ||
    getTargetCopy(original, cloned.right, target)
  );
};

// Follow up Q, if there could be duplication, then you have to traverse original
// 340 ms, faster than 28.40%
const getTargetCopyHard = (original, cloned, target) => {
  const queue = [original];
  const cloneQueue = [cloned];

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      const clonedNode = cloneQueue.shift();

      if (node === target) {
        return clonedNode;
      }

      if (node.left) {
        queue.push(node.left);
        cloneQueue.push(clonedNode.left);
      }

      if (node.right) {
        queue.push(node.right);
        cloneQueue.push(clonedNode.right);
      }
    }
  }
};
