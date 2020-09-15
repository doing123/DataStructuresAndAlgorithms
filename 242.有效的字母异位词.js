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
  // 1.映射计数
  if (s === t) return true;
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) map[s[i]] = 0;
    map[s[i]] += 1;
    if (map[t[i]] === undefined) map[t[i]] = 0;
    map[t[i]] -= 1;
  }
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      if (map[key] !== 0) return false;
    }
  }
  return true;
};
// @lc code=end
