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
  // 可以理解为：最多能跳多远
  let len = nums.length;
  let farthest = 0;
  for (let i = 0; i < len - 1; i++) {
    // 更新能跳到的最远距离
    farthest = Math.max(farthest, i + nums[i]);
    // 可能碰到了 0，卡住跳不动了
    if (farthest <= i) return false;
  }

  return farthest >= len - 1;
};
// @lc code=end
