/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let p1 = 0;
    let p2 = numbers.length -1;
    while(p1<p2) {
        if(numbers[p1]+numbers[p2] === target) {
            return [p1+1,p2+1]
        } else if(numbers[p1]+numbers[p2] < target) {
            p1++
        } else {
            p2--
        }
    }
};

