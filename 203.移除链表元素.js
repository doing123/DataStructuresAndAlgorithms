/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyHead = new ListNode(); // 哑节点
  dummyHead.next = head;
  let node = dummyHead;
  while (node.next) {
    if (node.next.val == val) {
      node.next = node.next.next; // 相等则 剔除next节点
    } else {
      node = node.next;
    }
  }
  return dummyHead.next;
};
// @lc code=end
