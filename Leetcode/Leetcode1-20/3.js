/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

https://leetcode.com/problems/longest-substring-without-repeating-characters/

我的解题思路是用一个字典来存每个不同字母的最新位置。在扫描过程中，
检查新字母在不在字典中，如果在的话，拿字典中的位置跟最新子串的首位比较，
如果在子串首位以后，
那么更新子串的首位和子串长度，否则，子串长度加一，并跟原先的解答比较。
*/

var lengthOfLongestSubstring = function(str) {
	var len = str.length;
	if(len<=1) return len;
	var longest = 1;
	var curLen = 1;
	var subStart = 0;
	var charPos = {};
	charPos[str.charAt(0)] = 0;
	for(var i=0;i<len;i++){
		var char = str.charAt(i);
		var posCharPrev = charPos[char];
		if(posCharPrev !== undefined && posCharPrev >= subStart){
			subStart = posCharPrev + 1;
			curLen = i - subStart + 1;
		}else{
			curLen++;
			if(curLen>longest) longest = curLen;
		}
		charPos[char] = i;
	}
	console.log(charPos);
	return longest;
}

/*console.log(lengthOfLongestSubstring('asdafpq'));*/
/*console.log([].length);*/
console.log(Infinity);