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
  // 1.迭代
  let prevHead = new ListNode(0);
  prevHead.next = head;
  let tmpHead = prevHead;
  let pos = 0;
  while (pos < m - 1) {
    tmpHead = tmpHead.next;
    pos++;
  }

  // 反转链表
  let prev = null;
  let curr = tmpHead.next;
  while (pos < n) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    pos++;
  }

  // 反转之后的链表拼接到原链表中
  tmpHead.next.next = curr;
  tmpHead.next = prev;
  return prevHead.next;
};
// @lc code=end
