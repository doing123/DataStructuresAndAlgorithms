/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // 2.二分法
  if (num == 1) return true;
  let left = 1;
  let right = num;
  while (left <= right) {
    let mid = (left + right) >>> 1;
    let tmp = mid * mid;
    if (tmp === num) {
      return true;
    } else if (tmp > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
// @lc code=end
