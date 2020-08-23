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
  let prev = dummyHead;
  let curr = head;
  dummyHead.next = curr;
  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      let tmp = curr.val;
      while (curr && curr.val == tmp) {
        curr = curr.next; // 相同的节点前进一步
      }
      prev.next = curr; // 慢指针prev的next指向curr，但prev不前进，因为下一个循环中curr可能也是存在相同值的节点
    } else {
      prev = prev.next;
      curr = curr.next;
    }
  }

  return dummyHead.next; // 输出哨兵节点的下一位
};

// deleteDuplicates(head.next);
// @lc code=end
