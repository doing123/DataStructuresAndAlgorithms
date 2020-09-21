/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 1.迭代
  while (root) {
    if (root.val > Math.max(p.val, q.val)) {
      root = root.left
    } else if (root.val < Math.min(p.val, q.val)) {
      root = root.right
    } else {
      return root
    }
  }
}
// @lc code=end
