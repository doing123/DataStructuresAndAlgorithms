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
  // 1.
  /* let result = []
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
  return result */

  // 2.建立哈希表
  let result = Array(nums1.length).fill(-1)
  let map = {}
  for (let i = 0; i < nums2.length; i++) {
    map[nums2[i]] = i
  }
  for (let i = 0; i < nums1.length; i++) {
    let start = map[nums1[i]]
    for (let j = start + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        result[i] = nums2[j]
        break
      }
    }
  }
  return result
}

// nextGreaterElement([4, 1, 2], [1, 3, 4, 2])
