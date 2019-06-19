/**
 *
 * @param {number[]} nums
 */
function bubbleSort (nums) {
  for (let i = 0, len = nums.length; i < len - 1; i++) {
    // 如果一轮比较中没有需要交换的数据，则说明数组已经有序
    let mark = true
    // 找到最大值放在右边
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        mark = false
      }
    }

    if (mark) return
  }
}
