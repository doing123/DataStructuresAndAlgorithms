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
  // 2.单词判定：当前为非空格，且前一个为空格
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let prev = s[i - 1];
    if ((prev == undefined || prev == ' ') && s[i] != ' ') {
      count++;
    }
  }
  return count;
};
// @lc code=end
