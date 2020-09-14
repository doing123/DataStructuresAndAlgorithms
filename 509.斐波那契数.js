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
  // 4.循环 解构赋值
  let n1 = 0;
  let n2 = 1;
  for (let i = 1; i < N; i++) {
    [n1, n2] = [n2, n1 + n2];
  }

  return n2;
};
// @lc code=end
