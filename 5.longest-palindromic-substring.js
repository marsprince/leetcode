/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.69%)
 * Total Accepted:    492.1K
 * Total Submissions: 1.8M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function(s) {
    // 扩散法
    let output = '';
    function findSinglePalindrome(s,index){
        let singleOutput = s[index]
        for(let i=1;i<s.length/2;i++) {
            const left =  s[(index-i)];
            const right = s[(index+i)];
            if(left!==undefined && 
            right!==undefined
            && left === right) {
                singleOutput = left + singleOutput + right
            } else {
                break
            }
        }
        return singleOutput
    }
    function findDoublePalindrome(s,index){
        const preIndex = s[(index)];
        const backIndex = s[(index+1)];
        let doubleOutput = ''
        if(preIndex!==undefined && backIndex!==undefined && preIndex===backIndex) {
            doubleOutput =  preIndex + backIndex
        } else {
            return doubleOutput;
        }
        for(let i=1;i<s.length/2;i++) {
            const left =  s[(index-i)];
            const right = s[(index+1+i)];
            if(left!==undefined && 
            right!==undefined
            && left === right) {
                doubleOutput = left + doubleOutput + right
            } else {
                break
            }
        }
        return doubleOutput
    }
    for(let i=0;i<s.length;i++) {
        const single = findSinglePalindrome(s,i);
        const double = findDoublePalindrome(s,i);
        output = single.length > output.length ? single : output
        output = double.length > output.length ? double : output
    }
    return output
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function(s) {
    // 传说中的马拉车法
    // 首先插入一个#
    let newstr = '#';
    for(let i=0;i<s.length;i++) {
        newstr += s[i]+'#'
    }
    // 定义一些变量

    // 以newStr每个字符串为中心的回文串的长度数组，最小为1
    let len = [];
    // 最长的回文串的右端点
    let longestPalindromeRight = 0;
    // 最长的回文串的中心点
    let longestPalindromeCenter = 0;
    // 记录最长回文长度
    let longestPalindrome = 0;

    for(let i=0;i<newstr.length;i++) {
        let needExpand = true;
        let spandStart = i+1;
        // 在右边界内的时候寻找对称点
        if(i<longestPalindromeRight) {
            // 找关于中心的对称点j
            const j = 2*longestPalindromeCenter - i;
            // 如果这时候还在右边界内，则不需要扩展
            if(longestPalindromeRight >= i + len[j] ) {
                len[i] = len[j];
                needExpand = false
            } else {
                spandStart = longestPalindromeRight + 1
            }
        }
        // 这里是拓展的代码
        if(needExpand) {
            // 这里雷同上面的single拓展
            while(spandStart<newstr.length && 2*i-spandStart>=0) {
                if(newstr[spandStart] === newstr[2*i-spandStart]) {
                    spandStart++
                } else {
                    break
                }
            }
        }
        len[i] = spandStart - i;
        if(len[i]>longestPalindrome) {
            longestPalindromeRight = spandStart - 1;
            longestPalindrome = len[i];
            longestPalindromeCenter = i;
        }
    }
    // 找到len中的最大值索引
    const originRight = longestPalindromeRight / 2;
    const originLongestPalindrome = longestPalindrome - 1;
    return s.substr(originRight-originLongestPalindrome,originLongestPalindrome)
};

/**
 * 动态规划
 * dp[i,j] = str[i] === str[j] ? dp[i+1,j-1] : 0
 * dp[i,i] = 1
 * dp[i][i+1]=1 if str[i]==str[i+1]
 */

var longestPalindrome = function(s) {
    if(s==='') return s
   let max = {
       length: 0,
       position: null
   }
   let result = {};
   for(let i=s.length-1;i>=0;i--) {
       result[i] = {}
       for(let j=i;j<s.length;j++) {
           if(i ===j) {
                result[i][j] = true
           } else {
               if(j ===i+1) {
                 result[i][j] = s[i] === s[j] ? true : false
               } else {
                 result[i][j] = s[i] === s[j] ? result[i+1][j-1] : false
               }
           }
           if(result[i][j] && j-i+1>max.length) {
             max.length = j-i+1
             max.position = {i,j}
           }
       }
   }
   return s.substring(max.position.i,max.position.j+1)
};
