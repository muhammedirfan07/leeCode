// @problem Valid Parentheses
//  * @link https://leetcode.com/problems/valid-parentheses/
//  * @difficulty Easy
//  * @topic Stack, String
//  *
//  * @description
//  * The array represents the integer 123.
//    Incrementing by one gives 123 + 1 = 124.
//     Thus, the result should be [1,2,4]
//  * determine if the input string is valid.
//  *
//  * @example
//  * Input:  digits = [1,2,3]" 
//  * Input:  s = "[1,2,4]"     
//  *
//  * @timeComplexity  O(n)
//  * @spaceComplexity O(n)



const plusOne =(num)=>{
    for(let i=num.length-1;i>=0;i--){
        if(num[i]<9){
             num[i]=num[i]+1
             return num
        }else{
            num[i]=0
        }
    }
    num.unshift(1)
    return num
}
digits=[9,9,9,9]
console.log(plusOne(digits));
