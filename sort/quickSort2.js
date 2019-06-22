/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function quickSort (nums) {
  // 划分交换排序，in-palce算法，不占用额外内存
  return recursive(nums, 0, nums.length - 1)
}

function recursive (arr, left, right) {
  if (left >= right) return
  let index = partition(arr, left, right)
  recursive(arr, left, index - 1)
  recursive(arr, index + 1, right)
  return arr
}

function partition (arr, left, right) {
  let tmp = arr[left]
  let p = left + 1
  let q = right
  while (p <= q) {
    while (p <= q && arr[p] < tmp) p++
    while (p <= q && arr[q] > tmp) q--
    if (p <= q) {
      [arr[p], arr[q]] = [arr[q], arr[p]]
      p++
      q--
    }
  }
  // 修改基数的位置
  [arr[left], arr[q]] = [arr[q], arr[left]]
  return q
}

// quickSort2([9, 3, 7, 6, 8, 1, 2, 4, 6, 5, 3])

export default quickSort
