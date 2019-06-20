// https://segmentfault.com/a/1190000019304443

/**
 *
 * @param {number[]} nums
 */
function selectSort (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
  }

  return nums
}

export default selectSort
