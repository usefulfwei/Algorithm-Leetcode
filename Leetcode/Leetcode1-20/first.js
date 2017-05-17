/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].*/

var twoSum = function(nums,target) {
	var len = nums.length;
	for(var i=0;i<len;i++){
		for(var j=i+1;j<len;j++){
			if(nums[i]+nums[j] == target){
				return [i,j];
			}
		}
	}
	return null;
}

console.log(twoSum([2, 7, 11, 15], 22));