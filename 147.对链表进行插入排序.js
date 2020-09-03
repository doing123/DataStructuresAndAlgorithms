/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
  // 1.双指针：curr指向已排序链表的最后一个节点；node用于遍历已排序链表的节点
  if (!head || !head.next) return head;
  let dummyHead = new ListNode(0); // 哨兵节点
  dummyHead.next = head;
  let curr = dummyHead.next; // 已排序链表的最后一个节点
  while (curr && curr.next) {
    if (curr.next.val >= curr.val) {
      curr = curr.next;
      continue;
    }

    let node = dummyHead; // 用于遍历已排序节点
    while (node.next.val < curr.next.val) {
      node = node.next;
    }

    // 插入节点 curr.next
    let next = curr.next;
    curr.next = next.next;
    next.next = node.next;
    node.next = next;
  }

  return dummyHead.next;
};
// @lc code=end
