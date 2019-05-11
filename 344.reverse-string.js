/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // return s.reverse()

    const len = Math.floor(s.length / 2)
    for(let i = 0; i < len; i++) {
      let tmp = s[i]
      s[i] = s[s.length - i - 1]
      s[s.length - i - 1] = tmp
    }

    return s
};

