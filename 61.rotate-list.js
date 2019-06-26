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
  // 1.从后往前逐一旋转
  /* let len = 0
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

  return head */

  // 2.快慢指针
  /* if (!head) return null
  let len = 0
  let cur = head
  while (cur) {
    cur = cur.next
    len += 1
  }
  k %= len

  let fast = head
  let slow = head
  for (let i = 0; i < k; i++) {
    if (fast) fast = fast.next
  }
  if (!fast) return head
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  fast.next = head
  fast = slow.next
  slow.next = null
  return fast */

  // 3. 单指针
  if (!head) return null
  let len = 1
  let cur = head
  while (cur.next) {
    len++
    cur = cur.next
  }
  cur.next = head
  let m = len - k % len
  for (let i = 0; i < m; i++) {
    cur = cur.next
  }
  let newNode = cur.next
  cur.next = null
  return newNode
}
