/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
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
  // 1.快排
  if (!head || !head.next) return head;
  quickSort(head, null);
  return head;

  function quickSort(begin, end) {
    if (begin !== end) {
      let part = partition(begin, end);
      quickSort(begin, part);
      quickSort(part.next, end);
    }
  }

  function partition(begin, end) {
    let part = begin.val;
    let slow = begin;
    let fast = begin.next;
    while (fast !== end) {
      if (fast.val < part) {
        slow = slow.next;
        swap(slow, fast);
      }
      fast = fast.next;
    }

    swap(slow, begin);
    return slow;
  }

  function swap(p, q) {
    if (p === q) return;
    let val = p.val;
    p.val = q.val;
    q.val = val;
  }
};
// @lc code=end
