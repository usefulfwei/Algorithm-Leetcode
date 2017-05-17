/*3Sum

Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 

https://leetcode.com/problems/3sum/

这个题目的要点是剔除重复的解，所以先做sort是必须的，Javascript缺省是按字符sort的，所以要sort数字，必须提供sort函数。
在三重循环过程中，要小心剔除重复的数字。很amazing的是，我一次提交就通过了。*/

var threeSum = function(nums){
	if(nums === null) return [];
	var len = nums.length;
	if(len<3) return [];
	nums.sort((x,y)=>x-y);
	//升序排列 由小到大

	var result = [];

	for(var i=0;i<len-2;i++){
		var v1 = nums[i];
		if(i>0 && nums[i-1] === i) continue; //skip duplicate
		for(var j=i+1;j<len-1;j++){
			var v2 = nums[j];
			if(j>i+1 && nums[j-1] = v2) continue;
			if(var k=j+1;k<len;k++){
				var v3 = nums[k];
				if(k>j+1 && v3 == nums[k-1]) continue;
				if(v1 + v2 + v3 === 0){
					result.push([v1,v2,v3]);
				}
			}
		}
	}
	return result;
}

