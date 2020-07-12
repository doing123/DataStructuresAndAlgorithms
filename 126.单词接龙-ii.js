/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  // 1.dfs 深度优先 TODO 执行不通过，应该是超过最大可递归栈数？
  if (!wordList.includes(endWord)) {
    return [];
  }
  let result = [];
  let min = Number.MAX_SAFE_INTEGER;
  // 各个通用状态对应所有单词，如：{'*ot': ['hot', 'dot', 'lot']}
  var comboDicts = {};
  var len = beginWord.length;
  for (var i = 0; i < wordList.length; i++) {
    for (var r = 0; r < len; r++) {
      var newWord =
        wordList[i].substring(0, r) + '*' + wordList[i].substring(r + 1, len);
      !comboDicts[newWord] && (comboDicts[newWord] = []);
      comboDicts[newWord].push(wordList[i]);
    }
  }
  // visited
  var visited = { beginWord: true };
  recursive(beginWord, 1, [beginWord]);
  return result;

  function recursive(currWord, level, arr) {
    if (level > min || level > wordList.length) return;
    if (currWord == endWord) {
      if (level < min) {
        result.length = 0;
      }
      result.push(arr);
      min = Math.min(min, level);
      return;
    }
    for (var i = 0; i < len; i++) {
      // 通用状态
      var newWord =
        currWord.substring(0, i) + '*' + currWord.substring(i + 1, len);
      if (newWord in comboDicts) {
        // 考虑开始单词：'hi*','*it'不存在通用状态中
        var tmpWords = comboDicts[newWord];
        for (var z = 0; z < tmpWords.length; z++) {
          if (!visited[tmpWords[z]]) {
            visited[tmpWords[z]] = true;
            recursive(tmpWords[z], level + 1, arr.concat(tmpWords[z]));
            visited[tmpWords[z]] = false;
          }
        }
      }
    }
  }
};
// @lc code=end
