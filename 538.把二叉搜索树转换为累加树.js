/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0;
  traverse(root);
  return root;

  function traverse (root) {
    if (!root) return;
    // 先遍历右子树的值
    traverse(root.right);

    // 中序遍历，累加
    sum += root.val;
    root.val = sum;

    traverse(root.left);
  }
};
// @lc code=end
