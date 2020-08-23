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
  // 2.双指针：快慢指针 优化
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let slow = dummyHead;
  let fast = head;
  while (fast && fast.next) {
    if (fast.val == fast.next.val) {
      let tmp = fast.val;
      while (fast && fast.val == tmp) {
        fast = fast.next; // 相同的节点前进一步
      }
      slow.next = fast; // 慢指针slow的next指向fast，但slow不前进，因为下一个循环中fast可能也是存在相同值的节点
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }

  return dummyHead.next; // 输出哨兵节点的下一位
};

// deleteDuplicates(head.next);
// @lc code=end
