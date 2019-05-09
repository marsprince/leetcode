/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {}
    let max;
    for(let i=0;i<nums.length;i++) {
        let value = nums[i]
        if(hash[value]===undefined) {
            hash[value] = 1
        } else {
            hash[value] += 1
        }
        if(!max || max.value < hash[value]) {
            max = {
                key: value,
                value: hash[value]
            }
        }
    }
    return max.key
};

