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
  // 1.广度优先遍历
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length) {
    let subArr = [...queue];
    queue = [];
    let total = 0;
    subArr.forEach((item) => {
      total += item.val;
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);
    });
    result.push(total / subArr.length);
  }

  return result;
};
// @lc code=end
