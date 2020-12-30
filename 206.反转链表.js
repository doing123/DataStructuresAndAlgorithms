/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 2.递归
  if (!head) return null;
  if (!head.next) return head;
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
// @lc code=end
