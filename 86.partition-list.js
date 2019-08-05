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
  // 1.划分链表，把所有小于给定值的节点都移到前面，大于该值的节点顺序不变，相当于局部排序
  /* let dummy = new ListNode(-1)
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
  return dummy.next */

  // 2.将所有小于给定值的节点取出组成一个新的链表，此时原链表中剩余的节点的值都大于或等于给定值，只要将原链表直接接在新链表后
  if (!head) return head
  let dummy = new ListNode(-1)
  let newDummy = new ListNode(-1)
  dummy.next = head
  let cur = dummy
  let pre = newDummy
  while (cur.next) {
    if (cur.next.val < x) {
      pre.next = cur.next
      pre = pre.next
      cur.next = cur.next.next
      pre.next = null
    } else {
      cur = cur.next
    }
  }
  pre.next = dummy.next
  return newDummy.next
}
