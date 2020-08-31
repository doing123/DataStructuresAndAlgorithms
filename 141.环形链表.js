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
  // 2.每个节点值重新赋值为最小安全值，再比较
  while (head) {
    if (head.val === Number.MIN_SAFE_INTEGER) return true;
    head.val = Number.MIN_SAFE_INTEGER;
    head = head.next;
  }
  return false;
};
// @lc code=end
