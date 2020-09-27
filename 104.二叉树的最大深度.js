/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  // 2.DFS
  if (!root) return 0;
  let result = 0;
  helper(0, root);
  return result;

  function helper (level, node) {
    result = Math.max(result, level);
    if (!node) return;
    helper(level + 1, node.left);
    helper(level + 1, node.right);
  }
};
// @lc code=end
