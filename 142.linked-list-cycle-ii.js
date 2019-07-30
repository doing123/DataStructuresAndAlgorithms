/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null
  let fast = head
  let slow = head

  // 在fast和slow指针相遇后，fast指针不动，slow指针回到head，然后slow指针和fast指针同时向前走，
  // 只不过这一次两个指针都是一步一步向前走。两个指针相遇的节点就是环路的起点。
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }

  return null
}
