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
  // 1.递归
  let len = inorder.length;
  let map = new Map();
  for (let i = 0; i < len; i++) {
    map.set(inorder[i], i);
  }

  return helper(0, len - 1, 0, len - 1);

  // 前序数组左边界、右边界、中序数组左边界、右边界
  function helper (prevLeft, prevRight, inLeft, inRight) {
    if (prevLeft > prevRight) return null;
    let val = preorder[prevLeft]; // 前序遍历的第一个 为 根节点
    let index = map.get(val);
    let root = new TreeNode(val);
    let leftTreeLen = index - inLeft;
    root.left = helper(prevLeft + 1, prevLeft + leftTreeLen, inLeft, index - 1);
    root.right = helper(
      prevLeft + leftTreeLen + 1,
      prevRight,
      index + 1,
      inRight
    );

    return root;
  }
};
// @lc code=end
