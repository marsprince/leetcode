/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    let _nums = nums.sort((a,b)=>{
        return a -b
    });
    for(let i=0;i<_nums.length-2;i++) {
        if (_nums[i] > 0) {
			return result;
		}
        if (i > 0 && _nums[i] == _nums[i - 1]) {
			continue;
		}
        let targetNum = 0 - _nums[i]
        let startPoint = i + 1
        let endPoint = _nums.length - 1
        while(endPoint>startPoint) {
            if(_nums[startPoint] + _nums[endPoint]<targetNum) {
                startPoint++
            } else if(_nums[startPoint] + _nums[endPoint]>targetNum){
                endPoint--
            } else {
                let arr = [_nums[i],_nums[startPoint],_nums[endPoint]]
                result.push(arr)
                startPoint++;
                endPoint--;
                while (startPoint < endPoint && _nums[startPoint] === _nums[startPoint - 1]) {
					startPoint++;
				}
				while (startPoint < endPoint && _nums[endPoint] === nums[endPoint + 1]) {
					endPoint--;
				}
            }
        }
    }
    return result
};
