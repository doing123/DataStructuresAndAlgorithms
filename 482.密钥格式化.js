/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  // 1.从后遍历
  S = S.replace(/-/g, '');
  let result = '';
  let i = S.length - K;
  while (i + K > 0) {
    result = (i > 0 ? '-' : '') + S.substring(i, i + K) + result;
    i -= K;
  }
  return result.toUpperCase();
};
// @lc code=end
