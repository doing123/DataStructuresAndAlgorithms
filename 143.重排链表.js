/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 2.空间优先：一边删除末尾节点，一边插入到新位置
  let p = head;
  while (p && p.next && p.next.next) {
    let q = p;
    while (q && q.next && q.next.next) {
      q = q.next; // q 指向倒数第二个节点
    }

    // 插入新位置
    q.next.next = p.next; // q.next 最后一个节点
    p.next = q.next;
    q.next = null; // 删除尾节点

    p = p.next.next;
  }

  return head;
};
// @lc code=end
