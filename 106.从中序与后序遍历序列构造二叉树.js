/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let len = inorder.length;
  return build(0, len - 1, 0, len - 1);

  function build (postLeft, postRight, inLeft, inRight) {
    if (postLeft > postRight) return null;
    // 后序遍历的最后一个值即为 根节点
    let val = postorder[postRight];
    let root = new TreeNode(val);
    let index = inorder.findIndex((item) => item === val); // 根节点在中序遍历的位置，分割左右子树

    // 左子树的个数
    let leftSize = index - inLeft;
    root.left = build(
      postLeft,
      postLeft + leftSize - 1,
      inLeft,
      index - 1
    );
    root.right = build(postLeft + leftSize, postRight - 1, index + 1, inRight);

    return root;
  }
};
// @lc code=end
