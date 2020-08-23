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
  let preHead = new ListNode(0);
  preHead.next = head;
  let pos = 0;
  let tmpHead = preHead;
  while (pos < m - 1) {
    tmpHead = tmpHead.next;
    pos++;
  }
  let pre = null;
  let cur = tmpHead.next;
  while (pos < n) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    pos++;
  }
  tmpHead.next.next = cur;
  tmpHead.next = pre;
  return preHead.next;
};
// @lc code=end
