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
  // 1.双指针
  if (s.length === 0) return true;
  let sIndex = 0;
  let tIndex = 0;
  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    if (sIndex >= s.length) return true;
    tIndex++;
  }
  return false;
};
// @lc code=end
