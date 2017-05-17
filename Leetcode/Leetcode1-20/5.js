/*Longest Palindromic Substring

Given a string S, find the longest palindromic substring in S. 
You may assume that the maximum length of S is 1000, 
and there exists one unique longest palindromic substring.

https://leetcode.com/problems/longest-palindromic-substring/

所谓的palindromic就是对称字符串，从左向右和从右向左是一样的。这个题我的解题思路非常俗，
非常直观，就是以每个位置为中心点（pivot)，
分别向左向右扫描。由于奇数位的对称和偶数位的对称不大一样，所以我分别区别，代码看着有些冗余。*/

var longestPalindrome = function(s){
	if(s === null || s.length === 0) return '';
	var sLen = s.length;

	var longest = 1;
	var start = 0;
	var end = 0;
	var inc;

	for(var iPivot = 0;iPivot<sLen-1;iPivot++){
		var curLen = 1;
		var incMax = Math.min(iPivot+1,sLen - iPivot);
		for(inc = 1;inc<incMax;inc++){
			var prevPos = iPivot - inc;
			var nextPos = iPivot + inc;
			if(s.charAt(prevPos) != s.charAt(nextPos)) break;
			curlen += 2
			if(curlen > longest){
				longest = curlen;
				start = prevPos;
				end = nextPos;
			}
		}

		//even
        var iPivot2 = iPivot + 1;
        if (s.charAt(iPivot) != s.charAt(iPivot2)) continue;
        curLen = 2;
        if (curLen > longest) {
            longest = curLen;
            start = iPivot;
            end = iPivot2;
        }
        incMax = Math.min(iPivot + 1, sLen - iPivot2);
        for (inc = 1; inc < incMax; inc++) {
            var prevPos = iPivot - inc;
            var nextPos = iPivot2 + inc;
            if (s.charAt(prevPos) != s.charAt(nextPos)) break;
            curLen += 2;
            if (curLen > longest) {
                longest = curLen;
                start = prevPos;
                end = nextPos;
            }
        }
	}
	return s.substr(start,end-start+1);
}