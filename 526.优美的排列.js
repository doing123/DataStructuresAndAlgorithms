/*
 * @lc app=leetcode.cn id=526 lang=javascript
 *
 * [526] 优美的排列
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
  // 回溯
  if (N === 0) return 0;
  let result = 0;
  let map = new Map(); // 1-N 个数可选
  let checkableMap = new Map(); // 1-N 每个数 对应的可选的所有数
  for (let i = 1; i <= N; i++) {
    map.set(i, true);
    let tmp = [];
    for (let j = 1; j <= N; j++) {
      if (j % i === 0 || i % j === 0) {
        tmp.push(j);
      }
    }
    checkableMap.set(i, tmp);
  }
  backtrack([]);
  return result;

  function backtrack(arr) {
    if (arr.length === N) {
      result++;
      return;
    }
    let need = checkableMap.get(arr.length + 1);
    for (let i = 0; i < need.length; i++) {
      if (map.get(need[i]) === false) continue;
      map.set(need[i], false);
      backtrack(arr.concat(need[i]));
      map.set(need[i], true);
    }
  }
};
// @lc code=end
