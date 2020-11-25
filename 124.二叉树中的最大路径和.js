/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let result = Number.MIN_SAFE_INTEGER;

  function helper (node) {
    if (!node) return 0;
    let left = Math.max(0, helper(node.left));
    let right = Math.max(0, helper(node.right));
    result = Math.max(result, left + right + node.val);
    return Math.max(left, right) + node.val; // 取该 node 节点 左右子树的路径和
  }

  helper(root);
  return result;
};
// @lc code=end
