/*Given a string containing just the characters '(' and ')', find the length of the
 longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", 
which has length = 4.

 

https://leetcode.com/problems/longest-valid-parentheses/

这个题目我想了很久都没想明白，无奈之下看了别人的解题思路。原来有两种解题思路，
一种还是玩堆栈push和pop的把戏，不过堆栈里存的是各个字符的index，这样就可以计算长短了。我楞是没想到这一点。

具体思路是，如果碰到左括号'('， 直接压入，如果碰到右括号')'，就看看堆栈里最后一个符号是不是左括号'('，
如果是就果断弹出，然后计算最长配对，如果堆栈里没有符号，说明所有的都配对了，
那么最长配对就是目前的长度（i+1)， 否则，堆栈里最后那个符号就是最后一个没有配对的符号，更新一下最长配对。*/

var longestValidParentheses = function(s){
	var stack = [];
	var len = s.length;
	var result = 0;
	for(var i=0;i<len;i++){
		var char = s.charAt(i);
		if(char == '(') stack.push(i);
		else{
			var stackLen = stack.length;
			if(stackLen > 0 && s.charAt(stack[stackLen-1])=='('){
				stack.pop();
				stackLen--;
				if(stackLen == 0) result = i+1;
				else result = Math.max(result,i-stack[stackLen-1]);
			}
			else stack.push(i);
		}
	}
	return result;
}

/*另一种解题思路是DP（Dynamic Programming)算法，这里所谓的DP算法，
其实是一种递推算法，递推算法跟递归算法很类似，只不过递归是利用函数调用，而递推则是利用循环，
也就是高中数学里的数学归纳法。

具体的解题思路是，假设i+1位为首的最长有效串已知，我们把它标记为'xxx...xxx'，
那么i位为首的最长有效串可以根据它推出来，

如果i位的字符是')'，那么i位为首的最长有效串是空，也即长度是0，因为')'不能做头，
如果i位的字符是'('，就形成'(xxx...xxx？'这样的字符串，i位为首的最长有效串完全依赖于'？'
   如果'？'是'('的话，最长有效串就是空，因为那个'('不会有匹配，
   否则j就跟i+1为首的最长有效串是'xxx...xxx'矛盾了。
   如果？是')'的话，'(xxxxx)'就成了有效串了，当然别忘了如果')'后面还有匹配的话，也需要加上。
两种算法迥然不同，结果却殊途同归。*/

var longestValidParentheses2 = function