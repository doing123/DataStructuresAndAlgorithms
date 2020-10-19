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
  let node = dummyHead;
  let p = l1;
  let q = l2;
  let curry = 0; // 进位
  while (p || q) {
    let x = p ? p.val : 0;
    let y = q ? q.val : 0;
    let sum = x + y + curry;
    node.next = new ListNode(sum % 10);
    curry = parseInt(sum / 10);
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
