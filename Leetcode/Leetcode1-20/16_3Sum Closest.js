3Sum Closest
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

https://leetcode.com/problems/3sum-closest/

这个题实在没什么好说的，就是简单的三维扫描。

var threeSumClosest = function(array,target){
	var len = array.length;
	var min = 10000;
	for(var i=0;i<len;i++){
		for(var j=i+1;j<len;j++){
			for(var l=j+1;l<len;l++){
				if(array[i]+array[j]+array[l] <= min){
					min = array[i]+array[j]+array[l]
				}
			}
		}
	}
	return min
}

var threeSumClosest = function(nums,target){
	if(nums == null) return null;
	var len = nums.length;
	if(len<3) return null;
	var closest = Infinity;
	for(var i=0;i<len-2;i++){
		for(var j=i+1;j<len-1;j++){
			for(var k=j+1;k<len;k++){
				var sum = nums[i] + nums[j] + nums[k]
				if(Math.abs(target-sum)<Math.abs(target-closest)) closest = sum
			}
		}
	}
	return closest;
}