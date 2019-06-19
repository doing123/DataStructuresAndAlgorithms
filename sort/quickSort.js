/**
 *
 * @param {number[]} nums
 */
function quickSort (nums) {
  return recursive(nums, 0, nums.length - 1)
}

// 递归排序基数左右两边的序列
function recursive (arr, left, right) {
  if (left >= right) return
  let base = partition(arr, left, right)
  recursive(arr, left, base - 1)
  recursive(arr, base + 1, right)
  return arr
}

// 将小于基数的数放到基数左边，大于基数的数放到基数的右边，并返回基数的位置
function partition (arr, left, right) {
  // 取第一个数为基数
  let tmp = arr[left]
  while (left < right) {
    while (left < right && arr[right] >= tmp) right--
    arr[left] = arr[right]
    while (left < right && arr[left] < tmp) left++
    arr[right] = arr[left]
  }
  // 修改基数的位置
  arr[left] = tmp
  return left
}

// quickSort([9, 3, 7, 6, 8, 1, 2, 4, 6, 5, 3])

export default quickSort
