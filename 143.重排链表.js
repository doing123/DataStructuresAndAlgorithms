/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return head;
  // 1.分割left、right链表两部分
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let left = head;
  let right = slow.next;
  slow.next = null;

  // 翻转right链表
  let reverseHead;
  let prev = null;
  let curr = right;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  reverseHead = prev;
  right = reverseHead;

  // 最后交替拼接left、right链表节点
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  while (left && right) {
    let lNext = left.next;
    let rNext = right.next;
    left.next = right;
    right.next = lNext;
    left = lNext;
    right = rNext;
  }

  return dummyHead.next;
};
// @lc code=end
