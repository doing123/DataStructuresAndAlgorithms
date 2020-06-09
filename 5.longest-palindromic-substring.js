/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 1.
  // let start = 0;
  // let end = 0;
  // let max = 0;
  // for (let i = 0, len = s.length; i < len; i++) {
  //   let j = i + 1;
  //   let len1 = extendStr(s, i, i);
  //   let len2 = extendStr(s, i, j);
  //   max = Math.max(len1, len2);
  //   if (max > end - start) {
  //     start = i - Math.floor((max - 1) / 2);
  //     end = i + Math.floor(max / 2);
  //   }
  // }
  // return s.substring(start, end + 1);

  // function extendStr(s, left, right) {
  //   while(left >= 0 && right < s.length && s[left] == s[right]) {
  //     left--;
  //     right++;
  //   }
  //   return right - left - 1;
  // }

  // 动态规划
  const len = s.length;
  let result = '';
  const dp = Array.apply(null, { length: len }).map(() => {
    return Array(len).fill(false);
  });

  for (let l = 0; l < len; l++) {
    for (i = 0; i < len; i++) {
      let j = l + i;
      if (j >= len) break;
      if (l == 0) {
        dp[i][j] = true;
      } else if (l == 1) {
        dp[i][j] = s[i] == s[j];
      } else {
        dp[i][j] = dp[i + 1][j - 1] && s[i] == s[j];
      }
      if (dp[i][j] && l + 1 > result.length) {
        result = s.substring(i, j + 1);
      }
    }
  }
  return result;
};

// @lc code=end
