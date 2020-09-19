/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 2.中序遍历，保存值
  let list = []
  inOrder(root)
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] >= list[i + 1]) return false
  }
  return true

  function inOrder (root) {
    if (!root) return
    inOrder(root.left)
    list.push(root.val)
    inOrder(root.right)
  }
}
// @lc code=end
