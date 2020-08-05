/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let result = [];
  recursive(root, '');
  return result;

  function recursive(node, str) {
    if(!node) return;
    str += str ? `->${node.val}` : node.val;
    if (!node.left && !node.right) {
      result.push(str);
      return;
    }
    recursive(node.left, str);
    recursive(node.right, str);
  }
};
// @lc code=end
