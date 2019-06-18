/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let res = 0
  const copy = [...heights]
  copy.sort((a, b) => a - b)
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] !== heights[i]) res++
  }
  return res
}
