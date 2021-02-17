/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 1.遍历两条链表的总长度
  let a = headA;
  let b = headB;
  while (a !== b) {
    if (a === null) {
      a = headB;
    } else {
      a = a.next;
    }

    if (b === null) {
      b = headA;
    } else {
      b = b.next;
    }
  }

  return a;
};
// @lc code=end
