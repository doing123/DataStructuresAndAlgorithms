/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let [start, end] = [dummyHead, dummyHead.next];
  let count = 0;
  while (end) {
    count++;
    if (count % k === 0) {
      start = reverseList(start, end.next);
      end = start.next;
    } else {
      end = end.next;
    }
  }

  function reverseList(start, end) {
    let [prev, curr] = [start, start.next];
    const tmp = curr;
    while (curr != end) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    start.next = prev;
    tmp.next = curr;
    return tmp;
  }

  return dummyHead.next;
};
// @lc code=end
