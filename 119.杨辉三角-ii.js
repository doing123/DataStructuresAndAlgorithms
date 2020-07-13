/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = [1];
  let prev = [1];
  if (rowIndex == 0) return result;
  prev.push(1);
  result.push(1);
  if (rowIndex == 1) return result;
  for (let i = 2; i < rowIndex + 1; i++) {
    prev = result.slice();
    for (let j = 1; j < i; j++) {
      result.splice(j, 1, prev[j - 1] + prev[j]);
    }
    result.push(1);
  }
  return result;
};
// @lc code=end
