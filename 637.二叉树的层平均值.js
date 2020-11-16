/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  // 2.深度优先
  let result = [];
  let map = new Map(); // 记录每层的个数

  helper(root, 0);

  return result.map((item, index) => {
    return item / map.get(index);
  });

  function helper (node, level) {
    if (!node) return;
    map.set(level, (map.get(level) || 0) + 1);
    result[level] = (result[level] || 0) + node.val;
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  }
};

// @lc code=end
