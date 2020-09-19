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
  // 3.中序遍历，prev 引用前一个节点，利用 prev.val< node.val作判断
  let prev
  return inOrder(root)

  function inOrder (node) {
    if (!node) return true
    let bool = inOrder(node.left)
    if (!bool) return false
    if (prev) {
      if (prev.val >= node.val) return false
    }
    prev = node // 更新 prev 指针
    return inOrder(node.right)
  }
}
// @lc code=end
