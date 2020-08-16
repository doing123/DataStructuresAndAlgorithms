/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 1.使用掩码，位与：相同为0， 不同为1
  let mask = 0b01; // 1
  let times = 0;
  let result = 0;
  while (times < 31) {
    if ((x & mask) != (y & mask)) {
      result++;
    }
    mask = mask << 1;
    times++;
  }
  return result;
};
// @lc code=end
