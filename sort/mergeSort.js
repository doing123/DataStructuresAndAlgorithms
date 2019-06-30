// 归并排序
/**
 *
 * @param {number[]} nums
 */
function mergeSort (nums) {
  recursive(0, nums.length - 1)
  return nums
  function recursive (left, right) {
    if (left >= right) return
    let mid = Math.floor((right - left) / 2) + left
    recursive(left, mid)
    recursive(mid + 1, right)
    merge(left, mid, mid + 1, right)
  }

  function merge (l1, end1, l2, end2) {
    let arr = []
    let index = 0
    let i = l1
    let j = l2
    while (i <= end1 && j <= end2) {
      arr[index++] = nums[i] < nums[j] ? nums[i++] : nums[j++]
    }
    while (i <= end1) {
      arr[index++] = nums[i++]
    }
    while (j <= end2) {
      arr[index++] = nums[j++]
    }
    // 将有序合并后的数组修改回原数组
    for (let k = 0; k < index; k++) {
      nums[l1 + k] = arr[k]
    }
  }
}

export default mergeSort
