/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // 2.递归
  if (s.length === 0) return true;
  let i = 0;
  while (i < t.length) {
    if (s[0] == t[i]) {
      // 对比剩余值
      let sRest = s.substring(1);
      let tRest = t.substring(i + 1);
      return isSubsequence(sRest, tRest);
    }
    i++;
  }
  return false;
};
// @lc code=end
