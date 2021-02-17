/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  // 1.暴力求解，运载能力范围为：最小（货物的最大值）- 最大（货物之和，即一次全部运送）
  // 2.利用二分查找
  // 最小运载能力
  let left = Math.max(...weights);
  // 最大
  let right = weights.reduce((prev, val) => prev + val, 0) + 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (canFinish(weights, mid, D)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

function canFinish (weights, cap, D) {
  let i = 0;
  for (let day = 0; day < D; day++) {
    let maxCap = cap;
    while ((maxCap -= weights[i]) >= 0) {
      i++;
      if (i === weights.length) {
        return true;
      }
    }
  }

  return false;
}
// @lc code=end
