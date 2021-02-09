/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 把二叉搜索树转换为累加树
 */

const { traverse } = require('@babel/core');

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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  // 中序遍历，遍历顺序为：右、中、左
  let sum = 0;
  traverse(root);
  return root;

  function traverse (root) {
    if (!root) return;
    traverse(root.right);

    // 中序遍历，累加
    sum += root.val;
    root.val = sum;

    traverse(root.left);
  }
};
// @lc code=end
