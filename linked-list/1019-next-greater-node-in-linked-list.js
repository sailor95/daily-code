/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 148 ms, faster than 85.93%
const nextLargerNodes = head => {
  let pointer = head;
  let indexCounter = 0;
  const stack = [];
  const ans = [];

  while (pointer) {
    while (stack.length && pointer.val > stack[stack.length - 1].val) {
      const node = stack.pop();
      ans[node.index] = pointer.val;
    }

    stack.push({
      index: indexCounter,
      val: pointer.val,
    });

    indexCounter++;
    pointer = pointer.next;
  }

  stack.forEach(node => {
    ans[node.index] = 0;
  });

  return ans;
};

// Interesting ans
const nextLargerNodes = head => {
  let current = head,
    pointer = head,
    ans = [];

  while (current.next) {
    pointer = pointer.next;
    if (pointer.val > current.val) {
      ans.push(pointer.val);
      current = current.next;
      pointer = current;
    } else if (pointer.next === null) {
      ans.push(0);
      current = current.next;
      pointer = current;
    }
  }
  // Last ans always 0
  ans.push(0);

  return ans;
};
