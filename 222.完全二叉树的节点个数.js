/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
  // 4.满二叉树、完全二叉树、普通二叉树
  if (!root) return 0;
  let left = root;
  let right = root;
  let hLeft = 0;
  let hRight = 0;
  while (left) {
    left = left.left;
    hLeft++;
  }
  while (right) {
    right = right.right;
    hRight++;
  }

  // 如果左右子树的高度相同，则是一棵满二叉树
  if (hLeft === hRight) {
    return Math.pow(2, hLeft) - 1;
  }

  // 如果左右高度不同，则按照普通二叉树的逻辑计算
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end
