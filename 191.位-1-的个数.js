/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // 解法一：循环和位移动
  // let count = 0;
  // let mask = 1;
  // for (let i = 0; i < 32; i++) {
  //   if ((mask & n) != 0) {
  //     count++;
  //   }
  //   mask <<= 1;
  // }
  // return count;

  // 解法二：位操作技巧
  let count = 0;
  while (n != 0) {
    count++;
    n &= n - 1;
  }
  return count;
};
// @lc code=end
