/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  // 3.二叉树遍历
  if (!root) return 0;
  if (root.left && root.right)
    return 1 + countNodes(root.left) + countNodes(root.right);
  if (root.left) return 1 + countNodes(root.left);
  if (root.right) return 1 + countNodes(root.right);
  return 1;
};
// @lc code=end
