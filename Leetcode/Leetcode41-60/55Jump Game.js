/**
 * Created by jwdn on 2017/5/2.
 *
 Given an array of non-negative integers,
 you are initially positioned at the first index of the array.

 Each element in the array represents your maximum jump length at that position.

 Determine if you are able to reach the last index.

 For example:
 A = [2,3,1,1,4], return true.

 A = [3,2,1,0,4], return false.

 因为我是先做的45题Jump Game II，同样的思路，所以这个问题就很简单了。
 还是顺着次序扫描这个数组，每次都更新一下最远能达到的距离，如果到了某个位置i,
 值是0，最远距离也是i，那就是走不下去了，这时候就return false。
 注意，不要扫描最后一个位置，因为只要前面不出问题，最后一个位置一定能走到的。
 */


var canJump = function(nums){

  var maxReach = 0;

  //不需要验证最后
  for(var i=0;i<nums.length-1;i++){
    var num = nums[i];
    if(num === 0){
      if(maxReach <= i) return false;
    }else{
      var newReach = i + num;
      if(newReach > maxReach) maxReach = newReach;
    }
  }
  return true;
}