/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  // 1.bfs 广度优先
  if (!endWord || wordList.indexOf(endWord) == -1) {
    return 0;
  }
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
  // Queue for BFS
  var queue = [[beginWord, 1]];
  // visited
  var visited = { beginWord: true };
  while (queue.length > 0) {
    var currNode = queue.shift();
    var currWord = currNode[0];
    var currLevel = currNode[1];
    for (var i = 0; i < len; i++) {
      // 通用状态
      var newWord =
        currWord.substring(0, i) + '*' + currWord.substring(i + 1, len);
      if (newWord in comboDicts) { // 考虑开始单词：'hi*','*it'不存在通用状态中
        var tmpWords = comboDicts[newWord];
        for (var z = 0; z < tmpWords.length; z++) {
          if (tmpWords[z] == endWord) {
            return currLevel + 1;
          }
          if (!visited[tmpWords[z]]) {
            visited[tmpWords[z]] = true;
            queue.push([tmpWords[z], currLevel + 1]);
          }
        }
      }
    }
  }
  return 0;

};
// @lc code=end
