/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // 1.双指针查找，es6解构赋值交换
  let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (set.has(arr[left])) {
      if (set.has(arr[right])) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
      }
      right--;
    } else {
      left++;
    }
  }
  return arr.join('');
};
// @lc code=end
