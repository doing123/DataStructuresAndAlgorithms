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
    let len = queue.length;
    let total = 0;
    for (let i = 0; i < len; i++) {
      const item = queue.shift();
      total += item.val;
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);
    }

    result.push(total / len);
  }

  return result;
};
// @lc code=end
