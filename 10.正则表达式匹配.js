/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // 边界
  if (p.length <= 0) {
    return s.length == 0;
  }

  // 第一个字符匹配
  let match = false;
  if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
    match = true;
  }

  // 有模式
  if (p.length > 1 && p[1] == '*') {
    // s*匹配 0 个
    // s*匹配一个， 且后续匹配下去
    return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p));
  } else {
    return match && isMatch(s.slice(1), p.slice(1));
  }
};
// @lc code=end
