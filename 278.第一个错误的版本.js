/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // 二分查找
    let left = 0;
    let right = n;
    let firstBabVersion = n;
    while (left <= right) {
      let mid = (left + right) >>> 1;
      if (isBadVersion(mid)) {
        right = mid - 1;
        firstBabVersion = mid;
      } else {
        left = mid + 1;
      }
    }
    return firstBabVersion;
  };
};
// @lc code=end
