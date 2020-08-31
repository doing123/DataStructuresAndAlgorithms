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
  // 3.使用“中序遍历”策略的优化
  // BST 的中序遍历的节点值，是单调递增的
  if (!head) return null;
  let len = 0;
  let h = head; // 指向头节点
  while(head) {
    len++;
    head = head.next;
  }

  const buildBST = (start, end) => {
    if (start > end) return null; // 递归结束
    const mid = (start + end) >>> 1; // 分治
    const left = buildBST(start, mid - 1); // 递归调用生成左子树，h移动到中间节点
    const root = new TreeNode(h.val);

    h = h.next; // h，父作用域变量，每次调用buildBST函数，h指针前进一步
    root.left = left;
    root.right = buildBST(mid + 1, end); // 右子树
    return root;
  }

  return buildBST(0, len - 1);
};
// @lc code=end
