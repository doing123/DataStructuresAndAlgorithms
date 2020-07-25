/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) return 0;
  let res = 0;
  let lastTime = timeSeries[0];
  for (const curTime of timeSeries) {
    if (curTime - lastTime < duration) {
      // 利用相邻两个时间差
      res += curTime - lastTime;
    } else {
      res += duration;
    }
    lastTime = curTime;
  }
  return res + duration;
};
// @lc code=end
