/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  return nums.reduce((total, num, index) => {
    return total + (index % 2 === 0 ? num : 0)
  })
};

