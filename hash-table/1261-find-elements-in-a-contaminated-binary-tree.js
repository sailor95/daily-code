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
 */
// 124 ms, faster than 78.05%
var FindElements = function (root) {
  this.set = new Set();
  root.val = 0;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    this.set.add(node.val);

    if (node.left) {
      node.left.val = node.val * 2 + 1;
      queue.push(node.left);
    }

    if (node.right) {
      node.right.val = node.val * 2 + 2;
      queue.push(node.right);
    }
  }

  return null;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.set.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

//  ES6 style

// 112 ms, faster than 97.56%
class FindElements2 {
  constructor(root) {
    this.set = new Set();
    this.dfs(root, 0);
  }

  dfs = (node, val) => {
    this.set.add(val);
    node.left && this.dfs(node.left, val * 2 + 1);
    node.right && this.dfs(node.right, val * 2 + 2);
  };

  find = target => this.set.has(target);
}
