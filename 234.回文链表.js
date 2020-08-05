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
var isPalindrome = function (head) {
  // 快慢指针
  if (!head || !head.next) return true;
  let prev = null;
  let slow = head;
  let reserved = null; // 保留前半部分链表，且已反转
  while (head && head.next) {
    prev = slow;
    slow = slow.next;
    head = head.next.next;
    prev.next = reserved;
    reserved = prev;
  }
  if (head) slow = slow.next; // 长度为奇数
  while (slow) {
    if (slow.val !== reserved.val) return false;
    slow = slow.next;
    reserved = reserved.next;
  }
  return true;
};
// @lc code=end
