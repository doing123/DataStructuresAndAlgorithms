/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function (root) {
  /* const res = []
  const queue = []
  if (root) queue.push(root)
  while (queue.length) {
    const arr = []
    // // push 动态改变了 queue 的 length 属性
    // const len = queue.length
    // for (let i = 0; i < len; i++) {
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift()
      arr.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(arr)
  }

  return res */

  const res = []
  levelOrder2(root, 0, res)
  return res
};

function levelOrder2(node, level, res) {
  if (!node) return
  if (res.length == level) res.push([])
  res[level].push(node.val)
  if (node.left) levelOrder2(node.left, level + 1, res)
  if (node.right) levelOrder2(node.right, level + 1, res)
}

