/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	let res = ''
	let i = num1.length - 1
	let j = num2.length - 1
	let carry = 0
	while (i >= 0 || j >= 0) {
		let a = i >= 0 ? num1[i--] - 0 : 0
		let b = j >= 0 ? num2[j--] - 0 : 0
		let sum = a + b + carry
		res = sum % 10 + res
		carry = Math.floor(sum / 10)
	}

	return carry ? '1' + res : res
};

