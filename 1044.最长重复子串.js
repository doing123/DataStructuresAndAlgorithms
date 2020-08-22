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
  // 1.超时
  let result = 0;
  let str = '';
  for (let i = 0, len = S.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let m = i;
      while (j < len && S[j] == S[m]) {
        j++;
        m++;
      }
      if (m - i > result) {
        result = Math.max(result, m - i);
        str = S.substring(i, m);
      }

    }
  }
  return str;
};

// @lc code=end
