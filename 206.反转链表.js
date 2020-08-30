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
  let reserveHead = null;
  let curr = head;
  let next;
  while (curr) {
    next = curr.next;
    curr.next = reserveHead;
    reserveHead = curr;
    curr = next;
  }
  return reserveHead;
};
// @lc code=end
