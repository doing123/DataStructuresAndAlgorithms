/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
  let node = head;
  while (node && node.next) {
    if (node.next.val === node.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head;
};
// @lc code=end
