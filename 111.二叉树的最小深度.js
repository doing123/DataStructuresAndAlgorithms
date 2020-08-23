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
  // 3.定义一个深度变量
  if (root == null) return 0;

  let depth = 1;
  let left = minDepth(root.left);
  let right = minDepth(root.right);

  if (left > 0 && right > 0) {
    depth += Math.min(left, right);
  } else if (left > 0) {
    depth += left;
  } else if (right > 0) {
    depth += right;
  }

  return depth;
};
// @lc code=end
