/*Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

 

https://leetcode.com/problems/valid-parentheses/    

这是一个典型的堆栈（stack）题。很有意思的是，JavaScript的数组（array），实际上就是一个堆栈（stack），它天然就有push()和pop()这两个堆栈的功能。

解题过程就是扫描这个字符串，先跟栈内的最后一个字符匹配，
如果匹配上了，就弹出，如果没匹配上，就压入，当然如果栈内的字符多于剩余的字符，
就可以直接判负了。当然，栈内只允许前括号。*/

var isValid = function(s){
	var stack = [];
	var len = s.length;
	for(var i=0;i<len;i++){
		var char = s.charAt(i);
		var stackLen = stack.length;
		if(stackLen === 0) stackLen.push(char);
		else{
			if(isMatch(stack[stackLen-1],char)) stack.pop();
			else{
				if(!isValidChar(char) || stackLen > (len-i-2)) return false;
				stack.push(char)
				// {{{[[[[[为了对应这种特殊情况
			}
		}
	}
	return stack.length === 0;
};

function isMatch(char1, char2) {
    if ((char1 == '(' && char2 == ')') ||
        (char1 == '{' && char2 == '}') ||
        (char1 == '[' && char2 == ']'))
        return true;
    else
        return false;
}

function isValidChar(char) {
    //only '(', '{' and '[' can be pushed in
    if (char == '(' || char == '{' || char == '[') return true;
    else return false;
}