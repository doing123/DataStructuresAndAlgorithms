/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  /* let res = 0
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i]
  // for (let key of nums) { // 效率：for...of < for...in < for 
  // for (let i in nums) {
  //   let key = nums[i]
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }

    if (map.has(key + 1)) {
      res = Math.max(res, map.get(key) + map.get(key + 1))
    }
    if (map.has(key - 1)) {
      res = Math.max(res, map.get(key) + map.get(key - 1))
    }
  }

  return res */

  // 2
  /* let res = 0
  let map = {}
  for(let i = 0; i < nums.length; i++) {
    let key = nums[i]
    if(map[key]) {
      map[key]++
    } else {
      map[key] = 1
    }
    if(map[key + 1]) {
      res = Math.max(res, map[key] + map[key + 1])
    }
    if(map[key - 1]) {
      res = Math.max(res, map[key] + map[key - 1])
    }
  }

  return res */

  // 3
  /* let res = 0
  let map = {}
  for(let i = 0; i < nums.length; i++) {
    let key = nums[i]
    if(map[key]) {
      map[key]++
    } else {
      map[key] = 1
    }
  }
  for(let key in map) {
    key = Number(key) // object 的 key 是 字符串
    if(map[key + 1]) {
      res = Math.max(res, map[key] + map[key + 1])
    }
  }

  return res */

  // 4
  let res = 0
  let start = 0
  let newStart = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[start] > 1) start = newStart
    if (nums[i] != nums[i - 1]) newStart = i
    if (nums[i] - nums[start] == 1) res = Math.max(res, i - start + 1)
  }

  return res
};

