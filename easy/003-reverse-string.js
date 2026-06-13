/**
 * @problem Reverse String
 * @link https://leetcode.com/problems/reverse-string/
 * @difficulty Easy
 * @topic Two Pointers, Array
 *
 * @description
 * Reverse a string (char array) in-place with O(1) extra memory.
 *
 * @example
 * Input:  ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 *
 * @timeComplexity  O(n)
 * @spaceComplexity O(1)
 */

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

// Tests
const a = ["h","e","l","l","o"];
reverseString(a);
console.log(a); // ["o","l","l","e","h"]
