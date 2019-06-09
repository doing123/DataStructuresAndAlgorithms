/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(' ')
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = arr[i].split('').reverse().join('')
  // }
  // return arr.join(' ')

  // let result = arr.map(item => {
  //   return item.split('').reverse().join('')
  // })

  // return result.join(' ')

  return s.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
};

