/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 1.BST 中序遍历，升序
  let result = 0;
  let count = 0;
  traverse(root, k);
  return result;

  function traverse (root, k) {
    if (!root) return;
    traverse(root.left, k);

    // 中序遍历
    count++;
    if (k === count) {
      result = root.val;
      return;
    }

    traverse(root.right, k);
  }
};
// @lc code=end
