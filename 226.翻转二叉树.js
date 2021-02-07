/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 1.前序遍历
  // base case
  if (!root) return null;

  // 前序遍历
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  // 递归翻转子树
  invertTree(root.left);
  invertTree(root.right);

  return root;
};
// @lc code=end
