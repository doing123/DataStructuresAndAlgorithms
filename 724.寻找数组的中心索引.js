/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((prev, val) => prev + val, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - nums[i] - leftSum) return i;
    leftSum += nums[i];
  }
  return -1;
};
// @lc code=end
