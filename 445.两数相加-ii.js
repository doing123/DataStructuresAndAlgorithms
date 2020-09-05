/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 2.利用栈，不翻转链表
  let stack1 = [];
  let stack2 = [];
  let result = [];
  let node1 = l1;
  let node2 = l2;
  let curry = 0;
  while (node1) {
    stack1.push(node1.val);
    node1 = node1.next;
  }
  while (node2) {
    stack2.push(node2.val);
    node2 = node2.next;
  }

  while (stack1.length || stack2.length) {
    let x = stack1.pop() || 0;
    let y = stack2.pop() || 0;
    let sum = x + y + curry;
    curry = parseInt(sum / 10);
    let val = sum % 10;
    result.push(new ListNode(val));
  }
  if (curry) result.push(new ListNode(curry));

  let dummyHead = new ListNode(0);
  let node = dummyHead;
  while (result.length) {
    node.next = result.pop();
    node = node.next;
  }
  return dummyHead.next;
};
// @lc code=end
