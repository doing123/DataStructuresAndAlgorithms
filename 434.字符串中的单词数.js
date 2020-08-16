/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let count = 0;
  let inSpace = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      inSpace = true;
    } else if (inSpace) {
      inSpace = false;
      count++;
    }
  }
  return count;
};
// @lc code=end
