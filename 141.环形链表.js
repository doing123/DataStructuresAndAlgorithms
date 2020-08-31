/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
var hasCycle = function (head) {
  // 1.快慢指针
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (true) {
    if (!fast || !fast.next) {
      return false;
    } else if (fast === slow || fast.next === slow) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
};
// @lc code=end
