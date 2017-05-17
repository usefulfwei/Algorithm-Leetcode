/*Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0

https://leetcode.com/problems/search-insert-position/

还是二分法查找，这里有一点要注意，当start和end相同的时候，当然需要单独考虑，
当start和end只相差1的时候，mid就等于start，这个时候，
mid-1有可能小于start（在end>start的情形下，mid+1永远也不会大于end的）。*/

var searchInsert = function(nums,target){
	var len = nums.length;
	return searchIndex(0,len-1)

	function searchIndex(start,end){
		if(start >= end){
			if(target == nums[start]) return start;
			else if(target <= nums[start]) return start;
			else return end+1;
		}

		var mid = Math.floor((start+end)/2);
		/*
		当start和end相同的时候，当然需要单独考虑，
		当start和end只相差1的时候，mid就等于start，这个时候，
		mid-1有可能小于start（在end>start的情形下，mid+1永远也不会大于end的
		*/
		var comp = nums[mid] - target;
		if(comp === 0) return mid;
		else if(comp > 0) return searchIndex(start,mid-1);
		else return searchIndex(mid+1,end);
	}
}

console.log(searchInsert([2,15,21,23,235245,53234],7));