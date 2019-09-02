/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
var minDepth = function (root) {
  // 1.递归
  /* if (!root) return 0
  if (!root.left) {
    return 1 + minDepth(root.right)
  }
  if (!root.right) {
    return 1 + minDepth(root.left)
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right)) */

  // 2.
  if (!root) return 0
  let res = 0
  let queue = [root]
  while (queue.length) {
    res++
    for (let i = queue.length; i > 0; i--) {
      let top = queue.shift()
      if (!top.left && !top.right) return res
      if (top.left) queue.push(top.left)
      if (top.right) queue.push(top.right)
    }
  }

  return -1
}
