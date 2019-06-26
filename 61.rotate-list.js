/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let len = 0
  let cur = head
  while (cur) {
    cur = cur.next
    len += 1
  }
  k = k % len

  for (let i = 1; i <= k; i++) {
    // 查找最后一个节点的 父节点 node，从后往前逐一旋转
    let parent = head
    while (parent) {
      if (parent.next && !parent.next.next) {
        // 最后一个节点的 next 指向 head
        parent.next.next = head
        // head 重新 赋值链表最前端值
        head = parent.next
        parent.next = null
      }
      parent = parent.next
    }
  }

  return head
}
