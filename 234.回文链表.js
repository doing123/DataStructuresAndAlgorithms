/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let left = '';
  let right = '';
  let node = head;
  while(node) {
    left += node.val;
    right = node.val + right;
    node = node.next;
  }
  return left === right;
};
// @lc code=end
