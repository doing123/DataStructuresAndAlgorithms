/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  if (root.val === key) {
    // 执行删除，分三种情况
    // 1.叶子节点
    if (!root.left && !root.right) return null;
    // 2.左右子树都存在，查找 右子树 的最小子节点值替换，并删除这个最小子节点
    if (root.left && root.right) {
      const minNode = getMin(root.right);
      root.val = minNode.val;
      root.right = deleteNode(root.right, minNode.val);
      return root;
    }

    // 3.只存在一侧的子树
    return root.left || root.right;
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    root.left = deleteNode(root.left, key);
  }

  return root;
};

function getMin (node) {
  // BST 最左边的就是最小的
  while (node.left) {
    node = node.left;
  }
  return node;
}
// @lc code=end
