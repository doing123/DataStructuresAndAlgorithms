/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function (head) {
  // TODO:
  // 1.转数组
  /* let arr = []
  let node = head
  while (node) {
    arr.push(node.val)
    node = node.next
  }
  arr.reverse()
  let newHead = new ListNode(0)
  let newNode = newHead
  while (arr.length) {
    let val = arr.shift()
    newNode.next = new ListNode(val)
    newNode = newNode.next
  }
  return newHead.next */

  // 2.迭代
  let first = head
  let reverseHead = null
  while (first) {
    let second = first.next
    first.next = reverseHead
    reverseHead = first
    first = second
  }
  return reverseHead
}
