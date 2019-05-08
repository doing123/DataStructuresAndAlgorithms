/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let arr1 = ransomNote.split('')
    let arr2 = magazine.split('')
    let result = true
    arr1.forEach(item => {
      const index = arr2.findIndex(sub => sub == item)
      if(index > -1) {
        arr2.splice(index, 1)
      } else {
        result = false
      }
    })

    return result
};

