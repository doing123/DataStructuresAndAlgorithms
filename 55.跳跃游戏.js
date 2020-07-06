/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // TODO 脑子不够用了
  let max = 0; // 能够走到的数组下标
  for (let i = 0; i < nums.length; i++) {
    if (max < i) return false;  // 当前这一步都走不到，后面更走不到了
    max = Math.max(max, nums[i] + i);
  }
  return max >= nums.length - 1;
};
// @lc code=end
