/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  // 递归回溯: 使用 10bit 同时保存小时和分钟
  // TODO 没完全理解
  const result = [];
  dfs(0, num, 0);
  return result;

  function dfs(time, n, index) {
    const hour = time >> 6;
    const minute = time & 0b111111;
    if (hour > 11 || minute > 59) return;
    if(n == 0) {
      result.push(`${hour}:${minute < 10 ? '0' + minute : minute}`);
      return;
    }
    const end = 10 - n;
    while(index <= end) {
      dfs(time | (1 << index), n - 1, ++index);
    }
  }
};
// @lc code=end
