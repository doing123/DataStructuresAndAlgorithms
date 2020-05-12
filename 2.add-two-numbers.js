/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let p = l1;
  let q = l2;
  let carry = 0;
  let curr = head;
  while (p != null || q != null) {
    const x = p != null ? p.val : 0;
    const y = q != null ? q.val : 0;
    const sum = x + y + carry;
    carry = parseInt(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p != null) p = p.next;
    if (q != null) q = q.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return head.next;
};
// @lc code=end
