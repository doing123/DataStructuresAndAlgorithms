/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let row = nums.length;
  let col = nums[0].length;
  if (row * col !== r * c) return nums;
  let result = [];

  let arr = nums.flat();
  for (let i = 0; i < r; i++) {
    result.push(arr.splice(0, c));
  }
  return result;
};
// @lc code=end
