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
  // TODO:不断作出局部最优决策
  // 遍历一个可抵达的区间，从中选出能跳最远的点，就有了新的可抵达的区间，然后跳一次，进入新的区间继续便利寻找最优解
  let step = 0;
  let end = 0;
  let max = 0; // 记录当前能去到的最远的位置
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
