/**
 * Created by jwdn on 2017/5/2.
 *
 Find the contiguous subarray within an array (containing at least one number)
 which has the largest sum.

 For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 the contiguous subarray [4,-1,2,1] has the largest sum = 6.

 https://leetcode.com/problems/maximum-subarray/

 这个题目可以用贪心（greedy）算法来求解，也就是先求一个子问题。
 这个子问题是假设固定以某个位置为结尾，求最大子数组，这个问题可以用递推来求解，
 假设sum( i-1 )已求出，那么sum（i）如何求？很简单，

 sum(i) = sum(i-1) < 0 ? nums[i] : nums[i] + sum(i-1)

 因为我们强迫这个子数组必须包括i位。

 解决了第一个问题，最终的问题就迎刃而解了。因为最大子数组必须以某个位置结尾，
 所以我们只要求出第一个问题产生的结果里的最大值就可以了。
 *
 */

var maxSubArray = function (nums) {
  var len =  nums.length;
  if(len == 0) return 0;
  var maxSum = nums[0];
  var curSum = nums[0];
  for(var i=1;i<len;i++){
    curSum = curSum < 0 ? nums[i] : nums[i]+ curSum;
    maxSum = Math.max(maxSum,curSum);
  }
  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
