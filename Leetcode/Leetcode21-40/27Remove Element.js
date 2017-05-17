/*Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.

https://leetcode.com/problems/remove-element/

这个题也许对Javascript毫无意义，因为splice函数就是专门删数组里的元素的。当然，
因为for的效率比while要高得多，所以循环尽量要用for， 从尾逆向扫描的时候就可以用for。
另外for的比较值一定要是常数，否则每次比较前都需要先算表达式(也许Java，C#会做代码优化，
	没有这个限制，但JavaScript必须那样做）。
	还有就是我观察到用javascript比较统计结果好像毫无意义，因为同一段code，
	两次run的统计结果可能截然不同。*/

var removeElement = function(nums,val){
	for(var iPos = nums.length-1;iPos>=0;iPos--){
		if(nums[iPos] == val) nums.splice(iPos,1);
	}
	return nums.length;
}