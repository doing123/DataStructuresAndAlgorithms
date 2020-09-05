/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
  // 1.先翻转链表，相加之后返回新链表，反转之后返回
  let p = helper(l1);
  let q = helper(l2);
  let sumHead = new ListNode(0);
  let curry = 0;
  let curr = sumHead;
  while (p || q) {
    let x = p ? p.val : 0;
    let y = q ? q.val : 0;
    let sum = x + y + curry;
    curry = parseInt(sum / 10);
    let val = sum % 10;
    curr.next = new ListNode(val);
    curr = curr.next;
    if (p) p = p.next;
    if (q) q = q.next;
  }
  if (curry) {
    curr.next = new ListNode(curry);
  }

  return helper(sumHead.next);

  function helper(head) {
    let node = head;
    let prev = null;
    while (node) {
      let next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return prev;
  }
};
// @lc code=end
