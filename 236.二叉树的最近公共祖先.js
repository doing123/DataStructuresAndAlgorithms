/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
  // 后序遍历
  // base case
  if (!root) return null;
  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  // 递归子树：找到 p 或 q 节点
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 如果p和q都在以 root 为根的树中，那么 left 和 right 一定分别是 p 和 q（从 base case 看出来的）
  if (left && right) {
    return root;
  }

  // 如果 p 和 q 只有一个存在于 root 为根的树中，函数返回该节点。因为 p 或 q 之一存在其子树上
  return left || right;
};
// @lc code=end
