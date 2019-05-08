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
    // const arr1 = ransomNote.split('')
    // const arr2 = magazine.split('')
    // let result = true
    // arr1.forEach(item => {
    //   const index = arr2.findIndex(sub => sub == item)
    //   if(index > -1) {
    //     arr2.splice(index, 1)
    //   } else {
    //     result = false
    //   }
    // })

    // return result

    let result = true
    for(let i = 0; i < ransomNote.length; i++) {
      for(let j = 0; j < magazine.length; j++) {
        if(ransomNote.charAt(i) === magazine.charAt(j)) {
          magazine = magazine.substring(0, j) + magazine.substring(j + 1, magazine.length)
        } else {
          result = false
        }
      }
    }

    return result
};

