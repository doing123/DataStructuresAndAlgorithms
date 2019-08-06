/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 1.递归：二叉搜索树的最小共同父节点
  // 二叉搜索树的特点是左<根<右，所以根节点的值一直都是中间值，大于左子树的所有节点值，小于右子树的所有节点值
  if (!root) return null
  // 如果根节点的值大于p和q之间的较大值，说明p和q都在左子树中，那么此时我们就进入根节点的左子节点继续递归
  // 如果根节点小于p和q之间的较小值，说明p和q都在右子树中，那么此时我们就进入根节点的右子节点继续递归，
  // 如果都不是，则说明当前根节点就是最小共同父节点，直接返回即可
  if (root.val > Math.max(p.val, q.val)) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (root.val < Math.min(p.val, q.val)) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}
