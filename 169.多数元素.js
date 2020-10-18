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
  // 3.sort排序之后，计数
  let result = 0;
  let len = nums.length;
  if (len === 1) return nums[0];
  nums.sort((a, b) => a - b);
  let count = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
      if (count > len / 2) return nums[i];
    } else {
      count = 1;
    }
  }
  return result;
};
// @lc code=end
