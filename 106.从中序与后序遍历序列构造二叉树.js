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
  let map = new Map();
  let rootIndex = len - 1; // 对应 postorder 的索引
  for (let i = 0; i < len; i++) {
    map.set(inorder[i], i); // 保存中序数组中每项的索引
  }

  return helper(0, inorder.length - 1);

  // left、right 对应在 inorder 中的索引
  function helper(left, right) {
    if (left > right) return null; // 没有元素构建子🌲
    let val = postorder[rootIndex];
    let root = new TreeNode(val);
    // 找到在 inorder 中的数据 分割左右子树的 索引
    let index = map.get(val);

    // 递归
    rootIndex--;
    root.right = helper(index + 1, right);
    root.left = helper(left, index - 1);

    return root;
  }
};
// @lc code=end
