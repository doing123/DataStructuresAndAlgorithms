/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  // 1.BFS 2
  if (!root) return 0;
  let level = 0;
  let queue = [root];
  while (queue.length) {
    level++;
    let arr = [...queue];
    queue = [];
    for (let node of arr) {
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return level;
};
// @lc code=end
