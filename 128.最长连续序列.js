/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length <= 1) return nums.length;
  const set = new Set(nums)
  nums = Array.from(set);
  nums.sort((a, b) => a - b);
  let res = 1;
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 == nums[i + 1]) {
      j++;
      res = Math.max(res, j);
    } else {
      j = 1;
    }
  }
  return res;
};
// @lc code=end
