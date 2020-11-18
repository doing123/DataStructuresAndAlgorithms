/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  // TODO 进制转换
  let current = Math.abs(num);
  let result = '';

  while (current >= 7) {
    result = (current % 7) + result;
    current = (current / 7) | 0; // 除 7 取 整
  }

  result = current + result;
  return (num < 0 ? '-' : '') + result;
};
// @lc code=end
