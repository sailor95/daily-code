/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// 80 ms, faster than 62.60%
const flatten = head => {
  const tailStack = [];
  let pointer = head;

  while (pointer) {
    if (pointer.child) {
      pointer.next && tailStack.push(pointer.next);
      pointer.child.prev = pointer;
      pointer.next = pointer.child;
      pointer.child = null;
    } else if (!pointer.next && tailStack.length) {
      const node = tailStack.pop();
      pointer.next = node;
      node.prev = pointer;
    }

    pointer = pointer.next;
  }

  return head;
};

// Recursive (don't get how to produce this)
var flatten2 = function (head, p, n) {
  if (!head) return head;
  if (p) head.prev = p;

  head.next = head.next
    ? flatten2(head.next, head, n)
    : n
    ? flatten2(n, head)
    : null;

  if (head.child) {
    head.next = flatten2(head.child, head, head.next);
    head.child = null;
  }

  return head;
};

var flatten3 = function (head, p, n) {
  if (!head) return head;
  if (p) head.prev = p;

  if (head.next) {
    head.next = flatten3(head.next, head, n);
  } else {
    if (n) {
      head.next = flatten3(n, head);
    } else {
      head.next = null;
    }
  }

  if (head.child) {
    head.next = flatten3(head.child, head, head.next);
    head.child = null;
  }

  return head;
};
