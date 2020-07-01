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
  if (candidates.length === 0) return res;
  candidates.sort((a, b) => a - b);
  getCombinations(res, '', candidates, target, 0);
  return res.map(item => item.split(','));

  function getCombinations(res, str, candidates, target, pos) {
    if (target < 0) return;
    if (target === 0 && !res.includes(str)) {
      res.push(str);
      return;
    }

    for (let i = pos; i < candidates.length; i++) {
      if (candidates[i] > target) break;
      let tmp = str +  (str ? ',' : '') + candidates[i];
      getCombinations(res, tmp, candidates, target - candidates[i], i + 1);
    }
  }
};
// @lc code=end
