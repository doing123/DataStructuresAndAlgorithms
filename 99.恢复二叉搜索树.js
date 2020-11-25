/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

const { traverse } = require('babel-core');

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // 1.递归：中序遍历
  // 三个指针，first，second 分别表示第一个和第二个错乱位置的节点，prev 指向中序遍历的当前节点 node 的前一个节点
  // BST：左 < 中 < 右，即 prev.val < node.val
  let first = null;
  let second = null;
  let prev = null;

  traverse(root);

  let tmp = first.val;
  first.val = second.val;
  second.val = tmp;

  function traverse (node) {
    if (!node) return;
    traverse(node.left);
    if (prev && node.val < prev.val) {
      if (!first) first = prev;
      second = node;
    }
    prev = node;
    traverse(node.right);
  }
};

// 参考： https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/xue-xi-shu-ju-jie-gou-he-suan-fa-de-gao-xiao-fang-fa
// @lc code=end
