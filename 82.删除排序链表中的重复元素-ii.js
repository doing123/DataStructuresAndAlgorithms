/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  // 1.双指针
  let dummyHead = new ListNode(0);
  let prev = dummyHead;
  let curr = head;
  dummyHead.next = curr;
  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      while (curr && curr.next && curr.val == curr.next.val) {
        curr = curr.next; // 相同的节点前进一步
      }
      curr = curr.next; // 前进一步，不取该节点
      prev.next = curr;
    } else {
      prev = prev.next;
      curr = curr.next;
    }
  }

  return dummyHead.next; // 输出哨兵节点的下一位
};

// deleteDuplicates(head.next);
// @lc code=end
