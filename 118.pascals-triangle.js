/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    if(numRows <= 0) return result
    result.push([1])
    for(let i = 1; i < numRows; i++) {
      let line = []
      line.push(1)
      for(let j = 1; j < i; j++) {
        line.push(result[i - 1][j - 1] + result[i - 1][j])
      }
      line.push(1)
      result.push(line)
    }
    return result
};

