/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  let result = [];
  let visited = new Map(); // 保存子树的结构用于比对
  traverse(root);
  return result;

  function traverse (root) {
    if (!root) return '#';

    let left = traverse(root.left);
    let right = traverse(root.right);
    // 后序遍历，保存子树的结构
    let subTree = left + ',' + right + ',' + root.val;

    // 多次重复只计数一次
    if (visited.get(subTree) === 1) {
      result.push(root);
    }

    visited.set(subTree, (visited.get(subTree) || 0) + 1);

    return subTree;
  }
};
// @lc code=end
