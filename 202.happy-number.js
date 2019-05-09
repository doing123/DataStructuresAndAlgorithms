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
    while(n != 1 && n != 4) {
        let result = 0
        while(n > 0) {
            let num = n % 10
            n = parseInt(n / 10)
            result += num * num
        }
        n = result
    }
    return n === 1

    // let set = new Set()
    // while(n != 1) {
    //     let sum = 0
    //     while(n > 0) {
    //         sum += (n % 10) * (n % 10)
    //         n = parseInt(n / 10)
    //     }
    //     n = sum
    //     if(set.has(n)) break
    //     set.add(n)
    // }

    // return n === 1
};

