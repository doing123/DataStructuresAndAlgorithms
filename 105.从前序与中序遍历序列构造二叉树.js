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
  // preorder[0]: 3 为 head，[1]：9 为 leftTree 的顶点
  // 中序遍历数组中以 3 为分割点，左边为 leftTree 的数据，右边第为 rightTree 的数据
  // // 1.递归
  let map = new Map();
  let len = inorder.length;
  let rootIndex = 0; // 对应 preorder 索引
  for (let i = 0; i < len; i++) {
    map.set(inorder[i], i); // 保存 索引
  }

  return helper(0, len - 1);

  // left、right 对应在 inorder 中的索引
  function helper(left, right) {
    if (left > right) return null;
    let val = preorder[rootIndex];
    let root = new TreeNode(val);
    // 找到在 inorder 中的数据 分割左右子树的 索引
    let index = map.get(val);

    // 递归
    rootIndex++; // 对应 preorder 的每一项
    root.left = helper(left, index - 1);
    root.right = helper(index + 1, right);

    return root;
  }
};
// @lc code=end
