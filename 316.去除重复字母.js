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
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 0;
    }
    map[s[i]]++;
  }

  let result = [];
  let inResult = {};
  for (let i = 0; i < s.length; i++) {
    // 每遍历过一个字符，都将对应的计数减一
    map[s[i]]--;
    if (inResult[s[i]]) continue;

    while (result.length && result[result.length - 1] > s[i]) {
      // 若之后不存在栈顶元素了，则停止 pop
      if (map[result[result.length - 1]] === 0) break;
      let top = result.pop();
      inResult[top] = false;
    }

    result.push(s[i]);
    inResult[s[i]] = true;
  }

  return result.join('');
};
// @lc code=end
