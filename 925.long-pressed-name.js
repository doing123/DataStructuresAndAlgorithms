/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 */
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let len1 = name.length
    let len2 = typed.length

    let index1 = 0
    let index2 = 0
    while(index1 < len1 && index2 < len2) {
      if(name[index1] == typed[index2]) {
        index1++
        index2++ 
      } else if(index2 > 0 && typed[index2 - 1] == typed[index2]) {
        index2++
      } else {
        return false
      }
    }

    return index1 == len1
};

