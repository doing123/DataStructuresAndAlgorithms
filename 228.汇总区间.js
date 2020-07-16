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
  // 优化
  let result = [];
  let start = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (i + 1 < len && nums[i + 1] - nums[i] === 1) continue;
    if (start == i) {
      result.push(`${nums[i]}`);
    } else {
      result.push(`${nums[start]}->${nums[i]}`);
    }
    start = i + 1;
  }
  return result;

  // 2.哨兵
  // let result = [];
  // let start = 0;
  // nums.push(null); // 哨兵
  // for (let i = 1, len = nums.length; i < len; i++) {
  //   if (nums[i] - nums[i - 1] > 1 || nums[i] == null) {
  //     if (i - start > 1) {
  //       result.push(`${nums[start]}->${nums[i - 1]}`);
  //     } else {
  //       result.push(`${nums[i - 1]}`);
  //     }
  //     start = i;
  //   }
  // }
  // return result;
};
// @lc code=end
