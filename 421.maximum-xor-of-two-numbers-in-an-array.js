/*
 * @lc app=leetcode id=421 lang=javascript
 *
 * [421] Maximum XOR of Two Numbers in an Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// TODO:https://www.cnblogs.com/grandyang/p/5991530.html
// 没理解
var findMaximumXOR = function (nums) {
  let max = 0
  let mask = 0
  for (let i = 31; i >= 0; i--) {
    mask |= (1 << i)
    let set = new Set()
    nums.forEach(item => {
      set.add(item & mask)
    })

    let tmp = max | (1 << i)
    for (let val of set.values()) {
      if (set.has(val ^ tmp)) {
        max = tmp
        break
      }
    }
  }

  return max
}
