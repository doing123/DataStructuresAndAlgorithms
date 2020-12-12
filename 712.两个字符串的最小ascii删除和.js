/*
 * @lc app=leetcode.cn id=712 lang=javascript
 *
 * [712] 两个字符串的最小ASCII删除和
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  // 参考 最长子序列
  let m = s1.length;
  let n = s2.length;
  let memo = Array.from({ length: m }, () => {
    return new Array(n).fill(-1); // -1 表示未计算
  });

  return dp(0, 0);

  // 动态规划
  function dp (i, j) {
    let res = 0;
    // base case
    if (i === m) {
      // 如果 s1 到头了，那么剩下的 s2 都要删除
      while (j < n) {
        res += s2.charCodeAt(j);
        j++;
      }
      return res;
    }

    if (j === n) {
      while (i < m) {
        res += s1.charCodeAt(i);
        i++;
      }
      return res;
    }

    if (memo[i][j] !== -1) return memo[i][j];
    if (s1[i] === s2[j]) {
      // 都在 lcs 中，不用删除
      memo[i][j] = dp(i + 1, j + 1);
    } else {
      // s1[i] 和 s2[j] 至少有一个不在 lcs 中，取最小值，
      // 删一个，指针前进一步
      memo[i][j] = Math.min(
        s1.charCodeAt(i) + dp(i + 1, j),
        s2.charCodeAt(j) + dp(i, j + 1)
      );
    }

    return memo[i][j];
  }
};
// @lc code=end
