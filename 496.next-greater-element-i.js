/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    let greater = -1
    let index = nums2.findIndex((val) => {
      return val === nums1[i]
    })
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        greater = nums2[j]
        break
      }
    }
    result.push(greater)
  }
  return result
}

// nextGreaterElement([4, 1, 2], [1, 3, 4, 2])
