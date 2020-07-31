/*
 * @lc app=leetcode.cn id=667 lang=javascript
 *
 * [667] 优美的排列 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  let i = k;
  let result = [1];
  let num = 1;
  let flag = true; // true:正，false:负
  while (i > 0) {
    if (flag) {
      num = num + i;
    } else {
      num = num - i;
    }
    result.push(num);
    flag = !flag;
    i--;
  }
  // 已处理好 k 个不同整数
  num = result.length + 1;
  while (num <= n) {
    result.push(num++);
  }

  return result;
};
// @lc code=end
