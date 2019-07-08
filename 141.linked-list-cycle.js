/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 1.快慢指针
  /* if (!head || !head.next) return false
  // 慢指针
  let slow = head
  // 快指针
  let fast = head.next

  while (true) {
    if (!fast || !fast.next) {
      return false
    } else if (fast === slow || fast.next === slow) {
      return true
    } else {
      slow = slow.next
      fast = fast.next.next
    }
  } */

  // 2. 重新赋值每个节点的值为最小安全值，再比较
  while (head !== null) {
    if (head.val === Number.MIN_SAFE_INTEGER) {
      return true
    } else {
      head.val = Number.MIN_SAFE_INTEGER
      head = head.next
    }
  }

  return false
}
