/*Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 

https://leetcode.com/problems/generate-parentheses/

这个题目考的是穷举，也就是周游，所以我就自然而然想到了周游算法的
老朋友-递归。我的递归函数有两个输入值，一个是已经放置了多少个符号了，
另一个是总共多少个符号（3的话是6个符号，
这个值实际上在递归过程中是不变的，用来计算下一个位置可以允许的符号）。
算法对头，所以也轻松Pass过关。*/
var generateParenthesis = function (n) {
    return generateP(n * 2, n*2);
};

function generateP(n,totalN){
	if(n === 1) return ["("];
	var resPrev = generateP(n-1,totalN);
	console.log(resPrev+'  resPrev');
	var len = resPrev.length;
	var res = [];
	for(var i=0;i<len;i++){
		var str = resPrev[i];
		var chars = allowedChars(str,totalN);
		var charLen = chars.length;
		for(var j=0;j<charLen;j++){
			res.push(str+chars[j])
		}
	}
	return res;
}

function allowedChars(str,totalN){
	var len = str.length;
	var icount = 0;
	for(var i=0;i<len;i++){
		var char = str.charAt(i);
		if(char == "(") icount++;//从左边开始数左括号的数目
		else icount--;//已经有一个括号匹配成功了
	}
	if(icount === 0) return ["("]
		//"(" is the only choice
	//全部匹配成功，再加一个新的左括号
	else{
		var left = totalN -len;
		if(icount >= left) return [")"];
		else return ["(",")"]
	}
}
//icount 数量 (
//total N 总共的括号数目
//n 总长度
console.log(generateParenthesis(3));