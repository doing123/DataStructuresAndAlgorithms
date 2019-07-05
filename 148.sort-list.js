/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function (head) {
  // 1.转为数组，排序后再重建链表
  if (head === null || head.next === null) return head
  let cur = head
  let arr = []
  while (cur !== null) {
    arr.push(cur.val)
    cur = cur.next
  }
  arr.sort((a, b) => a - b)
  cur = head
  while (cur !== null) {
    cur.val = arr.shift()
    cur = cur.next
  }
  return head
}
