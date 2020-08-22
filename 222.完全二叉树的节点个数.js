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
  // 1.递归
  let result = 0;
  helper(root);
  return result;

  function helper(root) {
    if (!root) return;
    result += 1;
    if (root.left) helper(root.left);
    if (root.right) helper(root.right);
  }
};
// @lc code=end
