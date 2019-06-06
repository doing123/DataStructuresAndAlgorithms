/*
 * @lc app=leetcode id=884 lang=javascript
 *
 * [884] Uncommon Words from Two Sentences
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  const arr = A.split(' ').concat(B.split(' '))
  const result = []
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i]
    if (obj[key]) {
      obj[key]++
    } else {
      obj[key] = 1
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) result.push(key)
  }

  return result
};

