/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  // 1.DFS 另一种写法

  // 初始状态：每个学生都没有被访问
  const visited = Array.from({ length: M.length }).fill(0);
  let result = 0;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      dfs(i);
      result++;
    }
  }

  return result;

  function dfs (i) {
    for (let j = 0; j < M.length; j++) {
      // i===j 时为自身，即不是自身且不在其他朋友圈且互为朋友
      if (i !== j && !visited[j] && M[i][j] === 1) {
        visited[j] = 1;
        dfs(j);
      }
    }
  }
};
// @lc code=end
