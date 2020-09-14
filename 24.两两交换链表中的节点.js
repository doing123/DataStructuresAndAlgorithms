/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let prev = dummyHead;
  while (prev.next && prev.next.next) {
    let curr = prev.next;
    let next = curr.next;
    prev.next = next;
    curr.next = next.next;
    next.next = curr;
    prev = curr;
  }

  return dummyHead.next;
};
// @lc code=end
