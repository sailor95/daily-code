/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 84 ms, faster than 93.66%
const oddEvenList = head => {
  if (!head?.next?.next) return head;

  const evenHead = head.next;
  let pointer = head;
  let index = 1;

  while (pointer.next?.next) {
    let temp = pointer.next;
    pointer.next = pointer.next.next;
    pointer = temp;
    index++;
  }

  if (index % 2 === 0) {
    pointer.next.next = evenHead;
    pointer.next = null;
  } else {
    pointer.next.next = null;
    pointer.next = evenHead;
  }

  return head;
};

const oddEvenList2 = head => {
  if (!head?.next?.next) return head;

  const evenHead = head.next;
  let oddPointer = head;
  let evenPointer = head.next;

  while (evenPointer?.next) {
    oddPointer.next = evenPointer.next;
    oddPointer = oddPointer.next;
    evenPointer.next = oddPointer.next;
    evenPointer = evenPointer.next;
  }

  oddPointer.next = evenHead;

  return head;
};
