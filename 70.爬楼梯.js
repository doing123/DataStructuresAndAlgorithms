/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 2.临时变量缓存 + 循环
  if (n <= 2) return n;
  let a = 1;
  let b = 2;
  for (let i = 2; i < n; i++) {
    let tmp = b;
    b = a + b;
    a = tmp;
  }
  return b;
};
// @lc code=end
