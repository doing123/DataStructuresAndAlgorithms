/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // 1.局部排序
  let dummy = new ListNode(-1)
  dummy.next = head
  let pre = dummy
  let cur = head
  // 首先找到第一个大于或等于给定值的节点
  while (pre.next && pre.next.val < x) pre = pre.next
  cur = pre
  while (cur.next) {
    if (cur.next.val < x) {
      let tmp = cur.next
      cur.next = tmp.next
      tmp.next = pre.next
      pre.next = tmp
      pre = pre.next
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}
