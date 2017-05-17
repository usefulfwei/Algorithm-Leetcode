/*Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

 

https://leetcode.com/problems/search-in-rotated-sorted-array/

既然pivot未知，那我们就先找出pivot来。由于题目假设数组里没有duplicate，所以只要两个元素是降序排列，
那后面那个元素就是pivot（如果找不到降序排列，那么pivot就是0）。在binary search过程中，其实只要比较mid值和start值，
如果mid值大于start值，那么就一定在后半区里，否则就在前半区里。

找到了pivot，事情就好办了，我们可以延伸这个数值，超过长度就用mod，在区间[pivot, pivot+len-1]里找值，
找到index以后再mod一下就可以了（当然，找不到的话是-1）。*/

var search = function(nums,target){
	var len = nums.length;
	var pivot = findPivot(0,len-1);
	if(pivot == len) pivot == 0;
	//（如果找不到降序排列，那么pivot就是0）
	var index = findIndex(pivot,pivot+len-1);
	if(index == -1) return -1;
	else return index;

	function findPivot(start,end){
		if(start == end) return start;
		else if(end -start == 1){
			if(nums[end]<nums[start]) return end;

			//why??
			else return end+1;
			//end 和 end +1 是降序排列
		}
		var mid = Math.floor((start+end)/2);
		if(nums[mid] > nums[start]) return findPivot(mid,end);
		else return findPivot(start,mid);
	}

	function findIndex(start,end){
		var mid = Math.floor((start+end)/2);
		var val = nums[mid%len];
		if(start == end && val != target) return -1;
		if(val > target) return findIndex(start,mid);
		else if(val == target) return mid%len;
		else return findIndex(mid+1,end);
	}
}

console.log(search([4,5,7,8,0,2,3],0))