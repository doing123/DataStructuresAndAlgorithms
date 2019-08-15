/*
 * @lc app=leetcode id=821 lang=javascript
 *
 * [821] Shortest Distance to a Character
 */
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  let len = S.length
  let result = Array(len).fill(0)

  let minArr = []
  for (let i = 0; i < len; i++) {
    if (S[i] === C) {
      minArr.push(i)
    }
  }

  for (let i = 0; i < len; i++) {
    if (S[i] !== C) {
      let min = len
      for (let j = 0; j < minArr.length; j++) {
        min = Math.min(min, Math.abs(minArr[j] - i))
      }
      result[i] = min
    }
  }

  return result
}
