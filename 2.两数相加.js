/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1;
  let q = l2;
  let curry = 0;
  let node = dummyHead;
  while (q || p) {
    let x = q ? q.val : 0;
    let y = p ? p.val : 0;
    let sum = x + y + curry;
    curry = parseInt(sum / 10);
    let val = sum % 10;
    node.next = new ListNode(val);
    node = node.next;
    if (p) p = p.next;
    if (q) q = q.next;
  }

  if (curry > 0) {
    node.next = new ListNode(curry);
  }

  return dummyHead.next;
};
// @lc code=end
