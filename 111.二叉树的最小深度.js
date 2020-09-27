/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  // 6.DFS
  if (!root) return 0;

  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (left && right) return 1 + Math.min(left, right);
  if (left === 0 || right === 0) {
    return left + right + 1;
  }
};
// @lc code=end
