/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildBST = (nums, start, end) => {
    if (start > end) return null; // 不在可用数据区间内 返回 null
    // 数组的中点即可保证平衡
    let mid = (start + end) >>> 1; // 无符号右移一位 8421
    let root = new TreeNode(nums[mid]);
    root.left = buildBST(nums, start, mid - 1);
    root.right = buildBST(nums, mid + 1, end);
    return root;
  };
  return buildBST(nums, 0, nums.length - 1);
};
// @lc code=end
