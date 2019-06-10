/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = []
  const queue = []
  if (root) queue.push(root)
  while (queue.length) {
    let oneLever = []
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift()
      oneLever.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.unshift(oneLever)
  }

  return res
};

