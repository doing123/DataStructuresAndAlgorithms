/**
 *
 * @param {number[]} nums
 */
function bubbleSort (nums) {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    let mark = true
    // 找到最大值放右边
    for (let i = low; i < high; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
        mark = false
      }
    }
    high--

    // 找到最小放到左边
    for (let j = high; j > low; j--) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
        mark = false
      }
    }
    low++

    if (mark) return
  }
}
