/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // 2.使用 256 数组
  // 因为输入为 ASCII 字符，大小 256 够用了
  let count = new Array(256).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i)]++;
  }

  let result = [];
  let inResult = new Array(256).fill(false);
  for (let i = 0; i < s.length; i++) {
    // 每遍历过一个字符，都将对应的计数减一
    count[s.charCodeAt(i)]--;
    if (inResult[s.charCodeAt(i)]) continue;

    while (result.length && result[result.length - 1] > s[i]) {
      // 若之后不存在栈顶元素了，则停止 pop
      if (count[result[result.length - 1].charCodeAt()] === 0) break;
      let top = result.pop(); // ASCII 字符
      inResult[top.charCodeAt(0)] = false;
    }

    result.push(s[i]);
    inResult[s.charCodeAt(i)] = true;
  }

  return result.join('');
};
// @lc code=end
