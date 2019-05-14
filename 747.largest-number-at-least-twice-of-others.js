/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let largest = 0
    let index
    nums.forEach((item, i) => {
        if(item > largest) {
            largest = item
            index = i
        }
    })
    let flag = nums.find((item, i) => {
        return index != i && item * 2 > largest
    })
    return flag ? -1 : index
};

