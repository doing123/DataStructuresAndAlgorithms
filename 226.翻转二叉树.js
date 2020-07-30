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
  recursive(root);
  return root;

  function recursive(node) {
    if (!node) return;
    recursive(node.left);
    recursive(node.right);
    let left = node.left;
    node.left = node.right;
    node.right = left;
  }
};
// @lc code=end
