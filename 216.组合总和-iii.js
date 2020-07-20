/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  // 回溯
  let result = [];
  helper(k, n, 1, []);
  return result;

  function helper(k, n, start, arr) {
    if (k == 0 && n == 0) {
      result.push(arr);
      return;
    }

    for (let i = start; i <= 9; i++) {
      if (n - i < 0) break;
      helper(k - 1, n - i, i + 1, arr.concat(i));
    }
  }
};
// @lc code=end
