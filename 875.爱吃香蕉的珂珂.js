/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
  // 1.暴力求解：超时
  // 在 H 小时内吃掉所有香蕉的最小速度 K 的范围是：1-（piles数组的最大值）
  const max = Math.max(...piles);
  for (let speed = 1; speed < max; speed++) {
    // 以 speed 是否能在 H 小时内吃完香蕉，线性搜索，从 1 开始找到第一个可以吃完所有香蕉的值
    if (canFinish(piles, speed, H)) {
      return speed;
    }
  }

  return max;
};

function canFinish (piles, speed, H) {
  let time = 0;
  for (const val of piles) {
    time += Math.floor(val / speed) + (val % speed > 0 ? 1 : 0);
  }
  return time <= H;
}
// @lc code=end
