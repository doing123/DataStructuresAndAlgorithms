/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N == 0) return 0;
  // 4.循环
  let n1 = 0;
  let n2 = 1;
  let sum = 1;
  for (let i = 1; i < N; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }

  return sum;
};
// @lc code=end
