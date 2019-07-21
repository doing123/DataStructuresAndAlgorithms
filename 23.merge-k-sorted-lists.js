/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // TODO:
  let queue = []
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      queue.push(lists[i])
    }
  }
  queue.sort((a, b) => a.val - b.val)

  let dummy = new ListNode(0)
  let cur = dummy
  let tmp = null
  while (queue.length) {
    tmp = queue.shift()
    cur.next = tmp
    cur = cur.next
    if (tmp.next !== null) {
      queue.push(tmp.next)
      queue.sort((a, b) => a.val - b.val)
    }
  }
  cur = dummy.next
  dummy = null
  return cur
}
