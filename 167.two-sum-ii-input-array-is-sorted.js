/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let tmp = target - numbers[i]
    for (let j = i + 1; j < numbers.length; j++) {
      if (tmp === numbers[j]) {
        return [i + 1, j + 1]
      }
    }
  }
  return []
}
