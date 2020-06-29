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
  let after = dummyHead;
  while (after.next && after.next.next) {
    let curr = after.next;
    let prev = curr.next;
    after.next = prev;
    curr.next = prev.next;
    prev.next = curr;
    after = curr;
  }

  return dummyHead.next;
};
// @lc code=end
