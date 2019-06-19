/**
 *
 * @param {number[]} nums
 */
function insertSort (nums) {
  for (let i = 1; i < nums.length; i++) {
    let tmp = nums[i]
    let j = i
    while (j >= 0 && tmp < nums[j - 1]) {
      nums[j] = nums[j - 1]
      j--
    }
    nums[j] = tmp
  }

  return nums
}

export default insertSort
