/*
 * @lc app=leetcode id=804 lang=javascript
 *
 * [804] Unique Morse Code Words
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    // a -> 97
    const set = new Set()
    for(let i = 0; i < words.length; i++) {
      let tmp = ''
      for(let j = 0; j < words[i].length; j++) {
        tmp += morse[words[i][j].charCodeAt() - 97]
      }
      console.log(tmp)
      set.add(tmp)
    }

    return set.size
};

