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

  // 2.快排
  if (!head || !head.next) return head
  quickSort(head, null)
  return head

  // 交换两个节点的值
  function swap (p, q) {
    if (p === q) return
    let val = p.val
    p.val = q.val
    q.val = val
  }

  // 寻找基准元素的节点
  function partition (begin, end) {
    // 第一个节点作为基准值
    let val = begin.val
    // p 慢指针：代表待交换的 大于 基准值的位置
    // q 快指针：代表待交换的 小于 基准值的位置
    // 当 快指针 指向的值 小于 基准值时，慢指针向前移动一位且交换彼此的值，之后快指针向前移动一位
    let p = begin
    let q = begin.next

    while (q !== end) {
      if (q.val < val) {
        p = p.next
        swap(p, q)
      }
      q = q.next
    }

    // 让基准元素跑到中间去
    swap(p, begin)
    return p
  }

  function quickSort (begin, end) {
    if (begin !== end) {
      let part = partition(begin, end)
      quickSort(begin, part)
      quickSort(part.next, end)
    }
  }

  // 3.归并
  /* if (head === null || head.next === null) {
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
  } */
}
