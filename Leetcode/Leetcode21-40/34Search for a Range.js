/*Given a sorted array of integers, 
find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].

https://leetcode.com/problems/search-for-a-range/

我的解题思路比较粗俗。我用了两个递归函数searchL和searchR
分别寻找左边的起始位置和右边的终止位置
（如果起始位置没找到，那么终止位置也不必找了）。*/

var searchRange = function(nums,target){
	var len = nums.length;
	var indexL = searchL(0,len-1);
	var indexR = -1;
	if(indexL >= 0) indexR = searchR(indexL,len-1);
	return [indexL,indexR];

	function searchL(start,end){
		if(start >= end){
			if(nums[end] == target) return end;
			else return -l;
		}
		if(end - start == -1){
			if(nums[start] == target) return start;
			else if (nums[end] == target) return end;
			else return -1;
		}

		var mid = Math.floor((start+end)/2);
		if(nums[mid]< target) return searchL(mid+1,end);
		else return searchL(start,mid);
	}

	function searchR(start,end){
		if(start >= end) return end;
		if(end - start == 1){
			if(nums[ed] == target) return end;
			else if(nums[start] == target) return start;
			else if(nums[end] == target) return end;
			else return -1;
		}
		var mid = Math.floor((start+end)/2);
		if(nums[mid]<=target) return searchR(mid,end);
		//这里可以有等于
		else return searchR(start,mid-1);
	}
}