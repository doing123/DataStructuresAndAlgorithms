/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短完整词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let reg = /[a-zA-Z]/g;
  let outerArr = licensePlate.toLowerCase().match(reg); // 处理拍照

  let count = Number.MAX_SAFE_INTEGER;
  let result = '';
  words.forEach((item) => {
    var arr = item.split('');
    for (let i = 0; i < outerArr.length; i++) {
      let flag = false; // 标志位，不在当前单词内直接 return，判断下一个单词
      for (let j = 0; j < arr.length; j++) {
        if (outerArr[i] == arr[j]) {
          arr.splice(j, 1); // 踢出该单词中已匹配字母，避免重复
          flag = true;
          break;
        }
      }
      if (flag == false) {
        return;
      }
    }
    if (item.length < count) {
      count = item.length; // 找最短，且是第一个
      result = item;
    }
  });
  return result;
};
// @lc code=end
