/*
 * @lc app=leetcode.cn id=1044 lang=javascript
 *
 * [1044] 最长重复子串
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (S) {
  // 2.暴力 依然超时
  for (let i = 1, len = S.length; i < len; i++) {
    let maxLen = len - i;
    for (let j = 0; j < i; j++) {
      for (let m = j + 1; m <= i; m++) {
        if (S.substring(j, j + maxLen) === S.substring(m, m + maxLen)) {
          return S.substring(j, j + maxLen);
        }
      }
    }
  }
  return '';
};

// @lc code=end
