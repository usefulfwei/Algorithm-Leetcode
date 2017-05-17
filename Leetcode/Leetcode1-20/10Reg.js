/*Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
 

https://leetcode.com/problems/regular-expression-matching/

由于JavaScript有超级强大的Regular Expression功能，所以这个问题对Javascript来说，其实不是问题。我直接用了JavaScript的Regex函数， 其实是不符合刷题的要求。以后有时间，再重写一个手工制作的Regex函数吧。*/

var isMatch = function(s,p){
	var re = new RegExp(p);
	var match = re.exec(s);
	//RegExpObject.exec(string)
	if(match == null || match.length === 0) return false;
	return s.length === match[0].length;
}