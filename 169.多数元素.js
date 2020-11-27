/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 4.投票算法
  let result = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) result = nums[i];
    if (result === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return result;
};
// @lc code=end
