/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  // 双指针
  if (k <= 1) return 0;
  let left = 0;
  let right = 0;
  let result = 0;
  let total = 1;
  while (right < nums.length) {
    total = total * nums[right];
    while (total >= k) {
      total = total / nums[left];
      left++;
    }
    // 滑动窗口：原来数组中有几个数，新增加一个数，就会增加几个连续子数组
    result += right - left + 1; // 以右指针为首增加子数组，[5,2]加6，增加[6]、[2,6]、[5,2,6]，个数即为R - L+ 1
    right++;
  }
  return result;
};
// @lc code=end
