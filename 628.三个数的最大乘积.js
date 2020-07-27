/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  // 2.线性扫描
  // 找出最大的三个数和最小的两个数
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max3 = Number.MIN_SAFE_INTEGER;
  for (let val of nums) {
    if (val <= min1) {
      min2 = min1;
      min1 = val;
    } else if (val <= min2) {
      min2 = val;
    }

    if (val >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = val;
    } else if (val >= max2) {
      max3 = max2;
      max2 = val;
    } else if (val >= max3) {
      max3 = val;
    }
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};
// @lc code=end
