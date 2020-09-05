/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    let next = fast.next; // 暂存奇数节点，并在链表中移除
    fast.next = next.next;
    fast = fast.next; // 快指针前进一步

    next.next = slow.next; // 插入暂存的奇数节点 next
    slow.next = next;
    slow = slow.next;
  }

  return head;
};
// @lc code=end
