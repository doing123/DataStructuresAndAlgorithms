/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 2.DFS 深度优先
  if (!root) return [];
  let result = [];

  helper(0, root);
  return result;
  function helper (level, node) {
    if (!node) return;
    if (level + 1 > result.length) {
      result.push([]);
    }
    result[level].push(node.val);
    helper(level + 1, node.left);
    helper(level + 1, node.right);
  }
};
// @lc code=end
