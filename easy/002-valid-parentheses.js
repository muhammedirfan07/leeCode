/**
 * @problem Valid Parentheses
 * @link https://leetcode.com/problems/valid-parentheses/
 * @difficulty Easy
 * @topic Stack, String
 *
 * @description
 * Given a string s containing '(', ')', '{', '}', '[', ']',
 * determine if the input string is valid.
 *
 * @example
 * Input:  s = "()[]{}"  → Output: true
 * Input:  s = "(]"      → Output: false
 *
 * @timeComplexity  O(n)
 * @spaceComplexity O(n)
 */

function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  for (const char of s) {
    if ('({['.includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
}

// Tests
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("{[]}"));     // true
