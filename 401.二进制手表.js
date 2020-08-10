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
var readBinaryWatch = function (num) {
  let result = [];
  // 遍历  0:00 -> 12:00   每个时间有多少1
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (count(i) + count(j) == num) {
        result.push(`${i}:${j < 10 ? '0' + j : j}`);
      }
    }
  }

  // 计算二进制中 1 的个数
  function count(n) {
    let res = 0;
    while (n != 0) {
      n = n & (n - 1); // TODO
      res++;
    }
    return res;
  }
};
// @lc code=end
