/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return build(0, preorder.length - 1, 0, inorder.length - 1);
  function build (prevLeft, prevRight, inLeft, inRight) {
    if (prevLeft > prevRight) return null;
    // 1.在前序遍历数组中确定 root 节点的值
    let val = preorder[prevLeft];
    let root = new TreeNode(val);
    let index = inorder.findIndex((item) => item === val); // 根节点在 中序数组中的位置，左边为左子树，右边为右子树
    // 2.构建左右子树
    let leftLen = index - inLeft;
    root.left = build(prevLeft + 1, prevLeft + leftLen, inLeft, index - 1);
    root.right = build(prevLeft + leftLen + 1, prevRight, index + 1, inRight);

    return root;
  }
};
// @lc code=end
