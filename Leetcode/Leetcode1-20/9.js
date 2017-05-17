/*Palindrome Number

Determine whether an integer is a palindrome. Do this without extra space.

https://leetcode.com/problems/palindrome-number/

做过第5题的话，这个题就太简单了。
所谓的palindrome number就是对称数。由于Javascript没有integer这种type，
所以我想还是需要先转换成string，然后检查前后的两两配对。*/

var isPalindrom = function(x){
	var xStr = x.toString();
	var len = xStr.length;
	var halfLen = len % 2 === 0 ? len/2 : (len-1)/2;
	for(var i=0;i<halfLen;i++){
		if(xStr.charAt(i) != xStr.charAt(len-1-i)) return false;
	}
	return true;
}