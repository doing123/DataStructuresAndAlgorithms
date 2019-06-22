/**
 *
 * @param {number[]} nums
 */
function quickSort (nums) {
  if (nums.length < 2) return nums
  const lesser = []
  const greater = []
  let pivot = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= pivot) {
      lesser.push(nums[i])
    } else {
      greater.push(nums[i])
    }
  }

  // 递归
  return quickSort(lesser).concat(pivot, quickSort(greater))
}

export default (arr) => {
  return quickSort(arr)
}
