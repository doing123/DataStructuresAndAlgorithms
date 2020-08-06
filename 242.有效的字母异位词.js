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
  // 1.先排序再比对
  if (s == t) return true;
  return s.split('').sort().join('') == t.split('').sort().join('');
};
// @lc code=end
