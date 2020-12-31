/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  // 2.递归
  if (m === 1) {
    // 转化为：反转前 N 个节点
    return reverseN(head, n);
  }
  // 前进到反转的起点触发 base case
  head.next = reverseBetween(head.next, m - 1, n - 1);
  return head;
};

let theNext = null; // 后继节点
// 反转以 head 开头的前 n 个节点
function reverseN (head, n) {
  if (n === 1) {
    // 记录第 n + 1 个节点
    theNext = head.next;
    return head;
  }
  // 以 head.next 为起点，需要反转前 n - 1 个节点
  let last = reverseN(head.next, n - 1);
  head.next.next = head;
  // 反转后的节点 与 后继节点连接
  head.next = theNext;
  return last;
}
// @lc code=end
