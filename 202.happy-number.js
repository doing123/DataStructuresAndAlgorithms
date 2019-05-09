/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while(n !=1 && n != 4) {
        let result = 0
        while(n % 10 > 0) {
            let num = n % 10
            n /= 10
            result += num * num
        }
        n = result
    }
    return n === 1
};

