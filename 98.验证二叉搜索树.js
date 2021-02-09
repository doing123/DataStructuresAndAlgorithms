/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 1.递归：以 root 为根的子树节点必须满足 max.val > root.val > min.val
  return helper(root, null, null);

  function helper (root, min, max) {
    if (!root) return true;
    if (min && min.val >= root.val) return false;
    if (max && max.val <= root.val) return false;

    // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
    return helper(root.left, min, root) && helper(root.right, root, max);
  }
};
// @lc code=end
