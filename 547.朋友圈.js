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
  // 2.并查集

  // 初始状态：每个学生都没有被访问
  let result = M.length;
  const parents = Array.from({ length: result }).map((item, index) => index);
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j]) {
        union(i, j);
      }
    }
  }
  return result;

  function union (i, j) {
    if (find(i) === find(j)) {
      return;
    }
    parents[parents[i]] = parents[j];
    result--;
  }

  function find (x) {
    if (parents[x] === x) return x;
    return (parents[x] = find(parents[x]));
  }
};
// @lc code=end
