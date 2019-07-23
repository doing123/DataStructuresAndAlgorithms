/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  if (!nums.length) return []
  let res = [[]]
  nums.sort((a, b) => a - b)
  let size = 1
  let last = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (last !== nums[i]) {
      last = nums[i]
      size = res.length
    }
    let newSize = res.length
    for (let j = newSize - size; j < newSize; j++) {
      // let arr = JSON.parse(JSON.stringify(res[j]))
      // let arr = [].concat(res[j])
      // let arr = [...res[j]]
      let [...arr] = res[j]
      arr.push(nums[i])
      res.push(arr)
    }
  }

  return res // res.sort()

  // TODO:递归，构建树
}

// subsetsWithDup([1, 2, 2])

// 数组拷贝四种方法
/**
 * 1.[].concat
 * 2.JSON.parse(JSON.stringify(arr))
 * 3.arr2 = [...arr1]
 * 4.[...arr2] = arr1
 */
