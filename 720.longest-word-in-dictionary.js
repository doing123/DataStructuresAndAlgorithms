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
  // 1.BFS: Breadth First Search，广度优先搜索,使用 queue 辅助
  /* let res = ''
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

  return res */

  // 2.递归
  /* let res = ''
  let maxLen = 0
  for (let i = 0, len = words.length; i < len; i++) {
    if (words[i].length === 1) {
      helper(words, words[i])
    }
  }
  return res

  function helper (words, word) {
    if (word.length > maxLen) {
      maxLen = word.length
      res = word
    } else if (word.length === maxLen) {
      res = res < word ? res : word
    }

    for (let i = 0; i < 26; i++) {
      let tmp = word + String.fromCharCode(i + 97)
      if (words.includes(tmp)) {
        helper(words, tmp)
      }
    }
  } */

  // 3.最优
  let res = ''
  let s = []
  words.sort() // words.sort((a, b) => a - b): 排序不符合要求，采用默认排序
  for (let i = 0, len = words.length; i < len; i++) {
    // substr: 从起始索引提取字符串中指定数目的字符
    // substring: 提取字符串中两个指定的索引号之间的字符
    if (words[i].length === 1 || s.includes(words[i].substr(0, words[i].length - 1))) {
      res = (words[i].length > res.length) ? words[i] : res
      s.push(words[i])
    }
  }

  return res
}

// longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'])
