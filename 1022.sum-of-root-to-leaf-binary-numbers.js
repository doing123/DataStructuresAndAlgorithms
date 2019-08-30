/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
var sumRootToLeaf = function (root) {
  // TODO: 1、2 不通过: 58/63
  // 1.DFS递归
  return sumNumbersDFS(root, 0)

  // 2.利用栈迭代求解
  /* if (!root) return 0
  let res = 0
  let stack = [root]
  while (stack.length) {
    let node = stack.pop()
    if (!node.left && !node.right) {
      res += parseInt(node.val, 2)
    }

    if (node.right) {
      node.right.val += node.val * 10
      stack.push(node.right)
    }

    if (node.left) {
      node.left.val += node.val * 10
      stack.push(node.left)
    }
  }

  return res */

  // 3.递归
  /* let res = 0

  dfs(root, 0)
  return res

  function dfs (node, val) {
    if (node !== null) {
      val <<= 1
      val += node.val
      if (node.left === null && node.right === null) {
        res += val
      }
      dfs(node.left, val)
      dfs(node.right, val)
    }
  } */
}

function sumNumbersDFS (root, sum) {
  if (!root) return 0
  sum = sum * 2 + root.val
  if (!root.left && !root.right) return sum
  return sumNumbersDFS(root.left, sum) + sumNumbersDFS(root.right, sum)
}
