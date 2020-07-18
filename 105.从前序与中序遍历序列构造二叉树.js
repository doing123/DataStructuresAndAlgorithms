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
  let map = new Map();
  let len = inorder.length;
  for (let i = 0; i < len; i++) {
    map.set(inorder[i], i); // 保存 索引
  }

  return myBuildTree(0, len - 1, 0, len - 1);

  // 前序数组左边界、右边界、中序数组左边界、右边界
  function myBuildTree(preLeft, preRight, inLeft, inRight) {
    if (preLeft > preRight) return null;
    let rootIndex = map.get(preorder[preLeft]); // 找到 前序数组中的root值（第一个左边界的值即为root值），在 中序数组中的 位置
    let root = new TreeNode(inorder[rootIndex]);
    let leftTreeLength = rootIndex - inLeft; // 左子树的长度
    // 构建左子树
    // preorder:[3,9] inorder:[9,3]
    root.left = myBuildTree(
      preLeft + 1,
      preLeft + leftTreeLength,
      inLeft,
      rootIndex - 1
    );
    // 构建右子树
    // preorder:[20, 15, 7] inorder:[15,20,7]
    root.right = myBuildTree(
      preLeft + leftTreeLength + 1,
      preRight,
      rootIndex + 1,
      inRight
    );

    return root;
  }
};
// @lc code=end
