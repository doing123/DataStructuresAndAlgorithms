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
  // 4.dfs：深度优先搜索 定义一个深度变量
  if (root == null) return 0;

  let depth = Infinity;
  if (root.left) depth = Math.min(depth, 1 + minDepth(root.left));
  if (root.right) depth = Math.min(depth, 1 + minDepth(root.right));
  if (!root.left && !root.right) depth = 1;

  return depth;
};
// @lc code=end
