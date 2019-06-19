/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = []
  let map = {}
  nums.forEach((item, index) => {
    map[item] = index
  })
  for (let i = 0; i < nums.length; i++) {
    let tmp = map[target - nums[i]]
    if (tmp !== undefined && tmp !== i) {
      res.push(i, tmp)
      break
    }
  }

  return res
}
