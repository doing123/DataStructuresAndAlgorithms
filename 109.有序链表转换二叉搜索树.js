/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  // 2.快慢指针
  if (!head) return null;
  let slow = head;
  let fast = head;
  let prevSlow; // slow 的前一个节点

  while (fast && fast.next) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  const root = new TreeNode(slow.val);

  if (prevSlow) { // 中点slow不是head，需要构建左子树 TODO ?
    prevSlow.next = null; // 与slow节点断开
    root.left = sortedListToBST(head);
  }
  root.right = sortedListToBST(slow.next);
  return root;
};
// @lc code=end
