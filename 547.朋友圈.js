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
  // 1.BFS

  // 初始状态：每个学生都没有被访问
  const visited = Array.from({ length: M.length }).fill(0);
  let result = 0;
  const queue = [];
  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      result++;
      queue.push(i);
    }
    while (queue.length) {
      const i = queue.shift();
      // 只查找 行，迭代下去
      for (let j = 0; j < M.length; j++) {
        if (i !== j && M[i][j] && !visited[j]) {
          queue.push(j);
          visited[j] = 1;
        }
      }
    }
  }

  return result;
};
// @lc code=end
