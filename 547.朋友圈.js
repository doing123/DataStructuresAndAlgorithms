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

  let result = M.length;
  // 初始状态：每个学生的parent 都指向自身
  const parents = Array.from({ length: result }).map((item, index) => index);
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] === 1) {
        union(i, j);
      }
    }
  }
  return result;

  function union (i, j) {
    // 属于同一个子集
    if (find(i) === find(j)) {
      return;
    }
    // 属于不同子集，将两个自己合并，result--
    parents[parents[i]] = parents[j];
    result--;
  }

  // 并查集常规搜索，添加路径压缩
  function find (x) {
    if (parents[x] === x) return x;
    return (parents[x] = find(parents[x]));
  }
};
// @lc code=end
