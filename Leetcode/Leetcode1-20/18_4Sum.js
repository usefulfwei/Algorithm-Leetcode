/*4Sum

Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 

https://leetcode.com/problems/4sum/

晕。这题跟15题3Sum好像没啥本质的区别啊。*/

var fourSum = function(nums, target) {
    if (nums === null) return [];
    var len = nums.length;
    if (len < 4) return [];
    nums.sort((x, y) => x - y);
    var result = [];
    for (var i = 0; i < len - 3; i++) {
        var v1 = nums[i];
        if (i > 0 && v1 === nums[i - 1]) continue; //skip duplicate 
        for (var j = i + 1; j < len - 2; j++) {
            var v2 = nums[j];
            if (j > i + 1 && v2 == nums[j - 1]) continue; //skip duplicate
            for (var k = j + 1; k < len-1; k++) {
                var v3 = nums[k];
                if (k > j + 1 && v3 == nums[k - 1]) continue; //skip duplicate
                for (var l = k + 1; l < len; l++) {
                    var v4 = nums[l];
                    if (l > k + 1 && v4 == nums[l - 1]) continue; //skip duplicate
                    if (v1 + v2 + v3 + v4 === target)
                        result.push([v1, v2, v3, v4]);
                }
            }
        }
    }
    return result;    
};