/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 映射计数
  if (s == t) return true;
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) map[s[i]] = 0;
    map[s[i]] += 1;
    if (!map[t[i]]) map[t[i]] = 0;
    map[t[i]] -= 1;
  }
  for (let key in map) {
    if (map[key] != 0) return false;
  }
  return true;
};
// @lc code=end
