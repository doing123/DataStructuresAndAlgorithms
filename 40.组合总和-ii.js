/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  let len = candidates.length;
  if (len === 0) return res;
  candidates.sort((a, b) => a - b);

  helper(0, target, []);
  return res;

  function helper(start, target, arr) {
    if (target < 0) return;
    if (target === 0) {
      res.push(arr);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) break; // 大剪枝
      // i > start &&  ?
      if (i > start && candidates[i] == candidates[i - 1]) continue; // 小剪枝
      helper(i + 1, target - candidates[i], arr.concat(candidates[i]));
    }
  }
};
// @lc code=end
