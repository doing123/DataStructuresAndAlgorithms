/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let start = false
    for(let i = 31; i >= 0; --i) {
        if(num & (1 << i)) start = true // 先把 1 左移 i 位，再 二进制“按位与“运算
        if(start) num ^= (1 << i)
    }
    return num
};

/**
 * 参考：
 * https://www.cnblogs.com/grandyang/p/6275742.html
 */

