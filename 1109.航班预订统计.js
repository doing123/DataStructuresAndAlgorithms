/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  // 1.暴力
  let result = new Array(n).fill(0);
  for (const item of bookings) {
    const [start, end, count] = item;
    for (let i = start - 1; i <= end - 1; i++) {
      result[i] += count;
    }
  }

  return result;
};
// @lc code=end
