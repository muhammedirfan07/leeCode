// @problem Valid Parentheses
//  * @link https://leetcode.com/problems/valid-parentheses/
//  * @difficulty Easy
//  * @topic Stack, String
//  *
//  * @description
//  * Given an integer x, return true if x is a palindrome, and false otherwise.
//  *
//  * @example
//  * Input: x = 121  → Output: true
//  * Input: x = -121      → Output: false
//  * Input: x = 10      → Output: false
//  */

const palindromeNumber =(x)=>{
     const revered =x.toString().split("").reverse().join("")
     return x.toString()=== revered
}
console.log(palindromeNumber(121));
// console.log(palindromeNumber(-121));
console.log(palindromeNumber(10));
