/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 2.映射
  let mapS = {};
  let mapT = {};
  for (let i = 0; i < s.length; i++) {
    if (!mapS[s[i]]) mapS[s[i]] = t[i];
    if (!mapT[t[i]]) mapT[t[i]] = s[i];
    if (mapS[s[i]] != t[i] || mapT[t[i]] != s[i]) return false;
  }
  return true;
};
// @lc code=end
