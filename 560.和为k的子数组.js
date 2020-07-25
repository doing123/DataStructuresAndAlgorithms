/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let result = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    // 连续的子数组
    let count = 0;
    let j = i;
    while (j < len) {
      count += nums[j]; // 穷举所有
      if (count === k) {
        result++;
      }

      j++;
    }
  }

  return result;
};
// @lc code=end
