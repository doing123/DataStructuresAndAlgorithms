/* eslint-disable eqeqeq */
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
function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // 1.转为数组，排序后再重建链表
  /* if (head === null || head.next === null) return head
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
  return head */

  // 2.快排 // TODO:error
  /* quickSort(head, null)
  return head
  function quickSort (head, tail) {
    if (head == tail) {
      return head
    }
    let val = head.val
    let prevSwapPtr = head
    for (let ptr = head.next; ptr != tail; ptr = ptr.next) {
      if (ptr.val < val) {
        let tmp = prevSwapPtr.next.val
        prevSwapPtr.next.val = ptr.val
        ptr.val = tmp

        prevSwapPtr = prevSwapPtr.next
      }
      head.val = prevSwapPtr.val
      prevSwapPtr.val = val

      quickSort(head, prevSwapPtr)
      quickSort(prevSwapPtr.next, tail)
    }
  } */

  // 3.归并
  if (head === null || head.next === null) {
    return head
  }
  let slow = head
  let fast = head
  let prev = null
  while (fast !== null && fast.next !== null) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  prev.next = null // 截断链表
  return merge(sortList(head), sortList(slow))

  function merge (l1, l2) {
    let l = new ListNode(0)
    let p = l
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        p.next = l1
        l1 = l1.next
      } else {
        p.next = l2
        l2 = l2.next
      }
      p = p.next
    }
    if (l1 !== null) {
      p.next = l1
    }
    if (l2 !== null) {
      p.next = l2
    }
    return l.next
  }
}
