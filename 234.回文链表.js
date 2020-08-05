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
  let result = [];
  let node = head;
  while(node) {
    result.push(node.val);
    node = node.next;
  }
  if (result.length == 1) return true;
  let left = result.join('');
  let right = result.reverse().join('');
  return left === right;
};
// @lc code=end
