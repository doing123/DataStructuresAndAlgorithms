/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  return build(nums, 0, nums.length - 1);
};

function build (nums, left, right) {
  // base case
  if (left > right) return null;

  // 找到数组中的最大值和对应的索引
  let index = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = left; i <= right; i++) {
    if (max < nums[i]) {
      index = i;
      max = nums[i];
    }
  }

  let root = new TreeNode(max);

  // 递归调用构造左右子树
  root.left = build(nums, left, index - 1);
  root.right = build(nums, index + 1, right);

  return root;
}
// @lc code=end
