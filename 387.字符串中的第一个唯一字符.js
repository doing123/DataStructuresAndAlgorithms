/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 2 计数
  let map = {};
  for (const char of s) {
    map[char] = ++map[char] || 0;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == 0) return i;
  }
  return -1;
};
// @lc code=end
