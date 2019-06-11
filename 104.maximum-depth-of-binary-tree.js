/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */
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
  /* if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) */

  if (!root) return 0
  let count = 0
  const queue = [root]
  while (queue.length) {
    count++
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift() // 按照 队列：先入先出 顺序取出
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return count
};

