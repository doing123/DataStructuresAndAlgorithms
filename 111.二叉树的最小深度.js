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
  // 5.bfs:广度优先搜索
  if (!root) return 0

  let depth = 0;
  let queue = [root];
  while (queue.length) {
    depth++;
    let len = queue.length; // 缓存长度
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (!node.left && !node.right) return depth;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return depth;
};
// @lc code=end
