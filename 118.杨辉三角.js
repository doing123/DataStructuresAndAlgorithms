/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 0) return [];
  const result = [];
  for (let i = 0; i < numRows; i++) {
    let temp = [1];
    const row = result[i - 1]; // 上一行
    for (let j = 1; j < i; j++) {
      temp.push(row[j - 1] + row[j]);
    }
    if (i > 0) temp.push(1);
    result.push(temp);
  }
  return result;
};
// @lc code=end
