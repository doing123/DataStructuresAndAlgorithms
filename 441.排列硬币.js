/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n == 0) return 0;
  let row = 1;
  while (row <= n) {
    n = n - row;
    row++;
  }
  return row - 1; // 不够，返回上一层的层数
};
// @lc code=end
