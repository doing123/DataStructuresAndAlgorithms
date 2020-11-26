/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // 回溯
  let result = [];
  helper(0, 0, []);
  return result;

  function helper (start, sum, arr) {
    if (target === sum) {
      result.push(arr);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] <= target) {
        helper(i, sum + candidates[i], arr.concat(candidates[i]));
      }
    }
  }
};
// @lc code=end
