/*Given a sorted array, remove the duplicates in place such that 
each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1
 and 2 respectively. It doesn't matter what you leave beyond the new length.

 

https://leetcode.com/problems/remove-duplicates-from-sorted-array/

我的解题思路是从尾逆向扫描，因为我不想因为删除元素引起index的错误（每次删除有可能删多个）。
在找到重复数的时候，有一个内循环一直找到第一个不是重复的数，然后删除所有重复的数。*/

var removeDuplicates = function(nums){
	var len = nums.length;
	if(len<2) return len;
	var numPrev = nums[len-1];
	var iPos = len - 2;
	while(iPos >= 0){
		if(nums[iPos] == numPrev){
			var dupStart = iPos;
			while(iPos >= 0 && nums[iPos] == numPrev) iPos--;
			//判断有多少个重复的
			nums.splice(iPos+1,dupStart - iPos);
			//第一个参数为位置，下标+1
			console.log((iPos+1)+"      "+(dupStart - iPos));
		}else{
			numPrev = nums[iPos];
			iPos--;
		}
	}
	return nums.length;
}
console.log(removeDuplicates([3,1,1,1,1,4,1,1,1,1,5,6]));