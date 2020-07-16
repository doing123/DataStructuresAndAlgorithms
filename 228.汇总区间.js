/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // let result = [];
  // let start = 0;
  // for (let i = 0, len = nums.length; i < len; i++) {
  //   if (nums[i + 1] - nums[i] > 1 || i == len - 1) {
  //     if (i - start > 0) {
  //       result.push(`${nums[start]}->${nums[i]}`);
  //     } else {
  //       result.push(`${nums[i]}`);
  //     }
  //     start = i + 1;
  //   }
  // }
  // return result;

  let result = [];
  let start = 0;
  nums.push(null); // 哨兵
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] - nums[i - 1] > 1 || nums[i] == null) {
      if (i - start > 1) {
        result.push(`${nums[start]}->${nums[i - 1]}`);
      } else {
        result.push(`${nums[i - 1]}`);
      }
      start = i;
    }
  }
  return result;
};
// @lc code=end
