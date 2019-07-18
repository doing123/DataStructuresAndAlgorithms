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
  let arr = nums1.concat(nums2)
  arr.sort((a, b) => a - b)
  if (arr.length % 2 === 0) {
    let tmp = arr.length / 2
    return (arr[tmp - 1] + arr[tmp]) / 2
  } else {
    let tmp = Math.floor(arr.length / 2)
    return arr[tmp]
  }

  // let max = Math.floor((nums1[nums1.length - 1] + nums2[nums2.length - 1]) / 2)
}
