/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 1. concat 数组 排序
  /* let arr = nums1.concat(nums2)
  arr.sort((a, b) => a - b)
  if (arr.length % 2 === 0) {
    let tmp = arr.length / 2
    return (arr[tmp - 1] + arr[tmp]) / 2
  } else {
    let tmp = Math.floor(arr.length / 2)
    return arr[tmp]
  } */

  // 2.count 计数
  let total = nums1.length + nums2.length
  let len = Math.floor(total / 2)
  let flag = total % 2 === 0
  let count = 0
  let result = []
  while (count <= len) {
    if (!nums1.length && !nums2.length) {
      return 0
    } else if (!nums1.length && nums2.length) {
      result.push(nums2.shift())
    } else if (!nums2.length && nums1.length) {
      result.push(nums1.shift())
    } else {
      if (nums1[0] < nums2[0]) {
        result.push(nums1.shift())
      } else {
        result.push(nums2.shift())
      }
    }
    count++
  }
  if (flag) {
    return (result.pop() + result.pop()) / 2
  } else {
    return result.pop()
  }
}

// findMedianSortedArrays([], [1])
