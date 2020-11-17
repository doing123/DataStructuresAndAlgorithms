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
  // 2.数组 unshift
  S = S.toUpperCase().split('-').join('');
  let result = [];
  while (S.length) {
    if (S.length > K) {
      result.unshift(S.slice(-K));
      S = S.slice(0, S.length - K);
    } else {
      result.unshift(S);
      S = '';
    }
  }
  return result.join('-');
};
// @lc code=end
