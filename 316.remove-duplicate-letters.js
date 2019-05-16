/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let ahead = {}
  for(let i = 0; i < s.length; i++) {
    if(ahead[s[i]] === undefined) {
      ahead[s[i]] = 0
    }
    ahead[s[i]]++
  }
  
  let result = ' '
  let inresult = {}
  for(let i = 0; i < s.length; i++) {
    ahead[s[i]]--
    if(inresult[s[i]]) continue
    while(s[i] < result[result.length - 1] && ahead[result[result.length - 1]]) {
      inresult[result[result.length - 1]] = false
      result = result.substr(0, result.length - 1)
    }
    result += s[i]
    inresult[s[i]] = true
  }

  return result.substr(1)

};

