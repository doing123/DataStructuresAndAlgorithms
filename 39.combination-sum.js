/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  if (candidates.length === 0) return res
  candidates.sort((a, b) => a - b)
  getCombinations(res, [], candidates, target, 0) // 从当前位置向后找
  return res
}

function getCombinations (res, arr, candidates, target, pos) {
  if (target < 0) return
  if (target === 0) {
    res.push(arr)
    return
  }
  for (let i = pos; i < candidates.length; i++) {
    if (candidates[i] > target) break
    let tmp = arr.slice()
    tmp.push(candidates[i])
    getCombinations(res, tmp, candidates, target - candidates[i], i)
  }
}

combinationSum([2, 3, 6, 7], 7)
