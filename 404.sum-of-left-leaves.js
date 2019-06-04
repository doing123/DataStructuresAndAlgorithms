/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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

 // https://www.cnblogs.com/grandyang/p/5923559.html
var sumOfLeftLeaves = function (root) {
  /* if (!root || (!root.left && !root.right)) return 0
  let result = 0

  calculate(root.left, true)
  calculate(root.right, false)

  return result

  function calculate(node, bool) {
    if (!node) return
    if (!node.left && !node.right && bool) {
      result += node.val
    }
    calculate(node.left, true)
    calculate(node.right, false)
  } */

  /* if (!root) return 0
  if (root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right)
  }

  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right) */

  /**
   * 迭代实现：queue
   */
  /* if (!root || (!root.left && !root.right)) return 0
  let result = 0
  const queue = []
  queue.push(root)

  while (queue.length) {
    const node = queue.shift()
    if (node.left && !node.left.left && !node.left.right) result += node.left.val
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return result */

  /**
   * 迭代实现：stack 是先序遍历的迭代写法 ???
   */
  if (!root || (!root.left && !root.right)) return 0
  let result = 0
  const stack = []
  stack.push(root)

  while (stack.length) {
    const node = stack.pop()
    if (node.left && !node.left.left && !node.left.right) result += node.left.val
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return result
};

