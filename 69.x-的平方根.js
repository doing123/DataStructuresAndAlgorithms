/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 2.二分查找，逼近目标值
  if (x < 2) return x; // 0,1平方根还是自身;
  let res = -1;
  let left = 0;
  let right = x >>> 1; // 除2 取整
  while (left <= right) {
    let mid = (left + right) >>> 1;
    if (mid * mid <= x) {
      res = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
};
// @lc code=end
