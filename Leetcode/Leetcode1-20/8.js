/*Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

https://leetcode.com/problems/string-to-integer-atoi/

这个问题看似简单，因为Javascript本身就有一个函数Number()可以把字符串转化为数字，但在递交过程中出现了一些幺蛾子。

第一个是空格， 前面的空格不算字符，中间的空格算字符，所以一开始必须用trim

第二个是单单“+”或者“-”， 算0，所以需要用JavaScript的isNaN()函数来判断一下。

第二个是数字还有限制，高于2^31-1(2147483647)或者低于-2^31（-2147483648）的数都要截断。*/

var myAtoi = function(str){
	str = str.trim();
	var index = str.trim().search(/[^+-\d]/);
	var sub;
	if(index<0){
		sub = str;
	}else{
		sub = str.substr(0,index);
	}
	var num = Number(sub);
	if(isNaN(num)) num = 0;
    if (num >= 2147483647) return 2147483647;
    else if (num <= -2147483648) return -2147483648;
    return num;
}