/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return null
  let newHead = new ListNode(0)
  newHead.next = head
  let slow = newHead
  let fast = newHead
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  if (!fast) return newHead.next
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return newHead.next
}
