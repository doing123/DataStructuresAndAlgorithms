/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 1.递归
  return helper(root, -Infinity, Infinity)

  function helper (root, lower, upper) {
    if (!root) return true
    if (root.val <= lower || root.val >= upper) return false
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
  }
}
// @lc code=end
