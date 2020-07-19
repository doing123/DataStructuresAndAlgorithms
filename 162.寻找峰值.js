/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // 2.二分查找：递归
  let left = 0;
  let right = nums.length - 1;

  return helper(left, right);

  function helper(left, right) {
    if (left == right) return left;
    let mid = left + ((right - left) >>> 1);
    if (nums[mid] > nums[mid + 1]) {
      return helper(left, mid);
    } else {
      return helper(mid + 1, right);
    }
  }
};
// @lc code=end
