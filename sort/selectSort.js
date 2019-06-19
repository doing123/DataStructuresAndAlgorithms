// https://segmentfault.com/a/1190000019304443

/**
 *
 * @param {number[]} nums
 */
function selectSort (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    let tmp = nums[i]
    let position = i
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < tmp) {
        tmp = nums[j]
        position = j
      }
    }
    nums[position] = nums[i]
    nums[i] = tmp
  }

  return nums
}

export default selectSort
