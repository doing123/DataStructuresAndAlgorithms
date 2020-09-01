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
  while (p) {
    let end = p;
    let prev = p;
    let has = false;
    while (end.next) {
      prev = end; // 倒数第二个节点
      end = end.next; // end 指向倒数第一个节点
      has = true;
    }

    if (has) {
      prev.next = null;
      end.next = p.next;
      p.next = end;
    }

    p = p.next ? p.next.next : null;
  }
};
// @lc code=end
