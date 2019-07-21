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
  // 1.模拟实现优先级队列：初始化时将每个链表的第一个结点加入队列，排序，之后每次弹出队首元素，将这个结点指向的下一个结点加入到队列，直至所有结点添加完毕
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

  // 2.TODO:
}
