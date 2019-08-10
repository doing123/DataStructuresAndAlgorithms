/*
 * @lc app=leetcode id=1122 lang=javascript
 *
 * [1122] Relative Sort Array
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let obj = {}
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      obj[arr1[i]] = 1
    } else {
      obj[arr1[i]]++
    }
  }

  let result = []
  let index = 0
  for (let i = 0; i < arr2.length; i++) {
    let tmp = arr2[i]
    for (let j = 0; j < obj[tmp]; j++) {
      result[index++] = tmp
    }

    delete obj[tmp]
  }
  for (let key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      result.push(key)
    }
  }
  return result
}

// relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
