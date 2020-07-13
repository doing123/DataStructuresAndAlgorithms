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
  let str = n.toString(2);
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) {
      result++;
    }
  }
  return result;
};
// @lc code=end
