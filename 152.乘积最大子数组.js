/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];
  let temp1, temp2;
  for (let i = 1; i < nums.length; i++) {
    temp1 = prevMax * nums[i];
    temp2 = prevMin * nums[i];
    // 对 j 来说，j - 1j−1 的最优解 可能是 最大乘积 ，也可能是 最小乘积
    prevMin = Math.min(temp1, temp2, nums[i]);
    prevMax = Math.max(temp1, temp2, nums[i]);
    result = Math.max(result, prevMax);
  }

  return result;
};
// @lc code=end
