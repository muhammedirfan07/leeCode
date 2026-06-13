/**
 * @problem Longest Substring Without Repeating Characters
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @difficulty Medium
 * @topic Sliding Window, Hash Map
 *
 * @description
 * Find the length of the longest substring without repeating characters.
 *
 * @example
 * Input:  s = "abcabcbb" → Output: 3  ("abc")
 * Input:  s = "pwwkew"   → Output: 3  ("wke")
 *
 * @timeComplexity  O(n)
 * @spaceComplexity O(n)
 */

function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (seen.has(char) && seen.get(char) >= left) {
      left = seen.get(char) + 1;
    }

    seen.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Tests
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3
