/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let step = 0;
  let end = 0;
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i);
    if (i == end) {
      end = max;
      step++;
    }
  }

  return step;
};
// @lc code=end
