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
  /* let res = []
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

  return res */

  const res = []
  levelOrder(root, 0, res)
  return res.reverse()
};

function levelOrder(node, level, res) {
  if (!node) return
  if (res.length == level) res.push([])
  res[level].push(node.val)
  if (node.left) levelOrder(node.left, level + 1, res)
  if (node.right) levelOrder(node.right, level + 1, res)
}

