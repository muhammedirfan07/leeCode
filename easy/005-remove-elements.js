/**
 * @problem Valid Parentheses
 * @link https://leetcode.com/problems/valid-parentheses/
 * @difficulty Easy
 * @topic Stack, String
 *
 * @description
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 *
 * @example
 * Input:   nums = [3,2,2,3], val = 3  → Output:  2, nums = [2,2,_,_]
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2  → Output:  5, nums = [0,1,4,0,3,_,_,_]
 *
 * @timeComplexity  O(n)
 * @spaceComplexity O(n)
 */


const removeElement =(nums,val)=>{
    let  k=0
    for(  let i=0 ; i<nums.length;i++){
        if(nums[i]!==val){
             nums[k]=nums[i]
             k++
        }
    }
    return k

}
let nums1 = [3,2,2,3];
console.log(removeElement(nums1, 3)); // 2
console.log(nums1); // [2,2,2,3]

let nums2 = [0,1,2,2,3,0,4,2];
console.log(removeElement(nums2, 2)); // 5
console.log(nums2); // [0,1,3,0,4,0,4,2]