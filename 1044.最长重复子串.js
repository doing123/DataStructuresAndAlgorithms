/*
 * @lc app=leetcode.cn id=1044 lang=javascript
 *
 * [1044] 最长重复子串
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (S) {
  // 3.二分查找 + Rabin-Karp 字符串编码
  // TODO 没理解
  const size = S.length;
  let low = 1,
    high = size - 1,
    mid,
    maxStr = '';

  // 二分查找
  while (low <= high) {
    mid = (low + high) >>> 1;
    const startIdx = rollingHash(mid);

    if (startIdx !== false) {
      maxStr = S.slice(startIdx, startIdx + mid);
      low = mid + 1;
    } else high = mid - 1;
  }

  return maxStr;

  // Rolling hash algorithm
  function rollingHash(len) {
    const charArr = [];
    const set = new Set();
    const prime = 2 ** 32; // Math.pow(2, 32)
    const base = 26;

    // 转换编码
    for (let i = 0; i < size; i++) {
      charArr.push(S[i].charCodeAt() - 96); // 'a'.charCodeAt()  97
    }

    // const value that is used often (26 ** len % mod)
    let MOST_SIG_DIGIT = 1,
      temp = len;
    // 获得最大可用数值
    // 对编码值进行取模，将编码控制在一定的范围内，防止溢出
    while (temp--) MOST_SIG_DIGIT = (MOST_SIG_DIGIT * base) % prime;

    let hashKey = 0;

    // build the initial hash
    for (let i = 0; i < len; i++) {
      hashKey = (hashKey * base + charArr[i]) % prime;
    }

    set.add(hashKey);

    for (let i = len; i < size; i++) {
      hashKey *= base;
      // remove the first char
      hashKey = hashKey - ((MOST_SIG_DIGIT * charArr[i - len]) % prime) + prime;
      // add the next char
      hashKey = (hashKey + charArr[i]) % prime;

      if (set.has(hashKey)) return i - len + 1;
      set.add(hashKey);
    }
    return false;
  }
};
// longestDupSubstring('banana')
// @lc code=end
