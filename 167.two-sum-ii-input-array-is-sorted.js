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
  // 1.
  /* for (let i = 0; i < numbers.length; i++) {
    let tmp = target - numbers[i]
    for (let j = i + 1; j < numbers.length; j++) {
      if (tmp === numbers[j]) {
        return [i + 1, j + 1]
      }
    }
  }
  return [] */

  // 2.
  /* let right = numbers.length
  for (let i = 0; i < right; i++) {
    let tmp = target - numbers[i]
    let left = i + 1
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2)
      if (numbers[mid] === tmp) return [i + 1, mid + 1]
      else if (numbers[mid] < tmp) left = mid + 1
      else right = mid
    }
  }
  return [] */

  // 3.
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let sum = numbers[left] + numbers[right]
    if (sum === target) return [left + 1, right + 1]
    else if (sum < target) left++
    else right--
  }
  return []
}

// twoSum([2, 7, 11, 15], 9)
