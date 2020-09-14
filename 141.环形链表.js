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
  // 3.使用set保存值
  let node = head;
  let set = new Set();
  while (node) {
    if (set.has(node)) return true;
    set.add(node);
    node = node.next;
  }
  return false;
};
// @lc code=end
