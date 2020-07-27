/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  // 1.排序
  nums.sort((a, b) => a - b);
  let len = nums.length;
  // 排序之后，如都为非负数，则是后三个元素的乘积；如出现了负数，则是最小的两个负数和最大的一个正的乘积
  return Math.max(
    nums[0] * nums[1] * nums[len - 1],
    nums[len - 1] * nums[len - 2] * nums[len - 3]
  );
};
// @lc code=end
