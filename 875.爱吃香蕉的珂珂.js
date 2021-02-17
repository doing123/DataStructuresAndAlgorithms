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
  // 2.二分查找
  let left = 1;
  let right = Math.max(...piles) + 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (canFinish(piles, mid, H)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

function canFinish (piles, speed, H) {
  let time = 0;
  for (const val of piles) {
    time += Math.floor(val / speed) + (val % speed > 0 ? 1 : 0);
  }
  return time <= H;
}
// @lc code=end
