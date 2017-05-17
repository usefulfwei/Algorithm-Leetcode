/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

https://leetcode.com/problems/reverse-integer/

这个题目超级简单，但一超过某个值，标准答案就变成0，
郁闷了半天以后看了一下spoilers，原来leetcode以为数值一超过32个bit，
reverse就会overflow，
什么神逻辑？？？Javascript压根就没有整数这个type， 完全不会overflow！

*/

var reverse = function(x){
	if(x===0)return 0;
	var xAbs = x>0 ? x: -x;
	var y=0;
	while(xAbs>0){
		y = y*10+xAbs%10;
		xAbs = Math.floor(xAbs/10)
		//每次都取个位
	}
	if(y>=2147483651) y = 0;
	return x > 0 ? y : -y; 
}