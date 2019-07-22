/*
 * @lc app=leetcode id=720 lang=javascript
 *
 * [720] Longest Word in Dictionary
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  // BFS: Breadth First Search，广度优先搜索,使用 queue 辅助
  let res = ''
  let maxLen = 0
  let queue = []
  for (let i = 0, len = words.length; i < len; i++) {
    if (words[i].length === 1) {
      queue.push(words[i])
    }
  }

  while (queue.length) {
    let t = queue.shift()
    if (t.length > maxLen) {
      maxLen = t.length
      res = t
    } else if (t.length === maxLen) {
      // 'abc' < 'abd'
      res = res < t ? res : t
    }

    for (let i = 0; i < 26; i++) {
      // 97-122: a-z
      let tmp = t + String.fromCharCode(i + 97)
      if (words.includes(tmp)) queue.push(tmp)
    }
  }

  return res
}
