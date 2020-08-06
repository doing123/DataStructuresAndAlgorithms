/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let map = {};
  let strMap = {};
  let arr = str.split(' ');
  if (pattern.length !== arr.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (!map[pattern[i]]) map[pattern[i]] = arr[i];
    if (!strMap[arr[i]]) strMap[arr[i]] = pattern[i];

    if (map[pattern[i]] != arr[i] || strMap[arr[i]] != pattern[i]) return false;
  }
  return true;
};
// @lc code=end
