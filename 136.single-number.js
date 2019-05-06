/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0
    nums.forEach(item => {
      result ^= item // 位运算：异或
    })
    return result
};

