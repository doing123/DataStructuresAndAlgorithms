/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let count = 0
  let len = word.length
  for (let i = 0; i < len; i++) {
    if (word[i] <= 'Z') count++
  }
  return count == 0 || count == len || (count == 1 && word[0] <= 'Z')
};

