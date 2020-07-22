/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  let mid;
  while (left <= right) {
    mid = (right + left) >>> 1; // 使用 >>> 无符号右移，>> 会不通过
    let val = guess(mid);
    if (val == -1) {
      right = mid - 1;
    } else if (val == 1) {
      left = mid + 1;
    } else if (val == 0) {
      return mid;
    }
  }
};
// @lc code=end
