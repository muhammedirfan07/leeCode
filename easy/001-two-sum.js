/**
 * @problem Two Sum
 * @link https://leetcode.com/problems/two-sum/
 * @difficulty Easy
 * @topic Arrays, Hash Map
 *
 * @description
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers that add up to target.
 *
 * @example
 * Input:  nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]  → because nums[0] + nums[1] = 2 + 7 = 9
 *
 * @timeComplexity  O(n)
 * @spaceComplexity O(n)
 */

function twoSum(nums, target) {
  const map = new Map(); // value → index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) 
      return [map.get(complement), i];
    map.set(nums[i], i);
  }

  return [];
}

// Tests
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]
