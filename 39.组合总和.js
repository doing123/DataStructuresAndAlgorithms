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
  helper(0, target, []);
  return result;

  function helper(start, target, arr) {
    if (target == 0) {
      result.push(arr);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (target - candidates[i] >= 0) {
        helper(i, target - candidates[i], arr.concat(candidates[i]));
      }
    }
  }
};
// @lc code=end
