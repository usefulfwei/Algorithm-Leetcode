/**
 * Created by jwdn on 2017/5/1.
 Given a collection of numbers that might contain duplicates,
 return all possible unique permutations.

 For example,
 [1,1,2] have the following unique permutations:

 [
 [1,1,2],
 [1,2,1],
 [2,1,1]
 ]

 前面那题（46题）如果是用递归-回溯的办法，那这个题就是在那个算法上简单修改一下就可以了。
 两个修改，第一，数组一定要sort，第二，在递归函数里，list替换的时候，
 比较一下当前压入的值和上一次压入的值（也就是刚刚弹出来的值）是否相同，如果相同，果断跳过。
 */
var permuteUnique = function (nums) {
  var len = nums.length;
  var result = [];
  var used = [];

  for(var i=0;i<len;i++){
    used.push(false);
  }

  nums.sort((x,y) => x-y);

  var list = [];
  permutef();
  return result;

  function permutef() {
    if(list.length == len){
      result.push(list.slice());
      return;
    }
    for(var i=0;i<len;i++){
      if(used[i]) continue;

      if(i>0 && !used[i-1] && nums[i] == nums[i-1]) continue;
      //i>0
      //i-1>=0
      //used[i-1]==false 未被使用
      //nums[i-1] == nums[i]

      // 第二，在递归函数里，list替换的时候，比较一下当前压入的值和上一次压入的值
      // （也就是刚刚弹出来的值）是否相同，如果相同，果断跳过。

      // if(i>0 && nums[i] == nums[i-1]) continue;
      //有相同的跳过
      used[i] = true;
      list.push(nums[i]);
      permutef();
      used[i] = false;
      list.pop();
    }
  }
}

// var permuteUnique = function(nums) {
//   var len = nums.length;
//   var result = [];
//   var used = [];
//   for (var i = 0; i < len; i++) {
//     used.push(false);
//   }
//   nums.sort((x, y) => x - y);
//   var list = [];
//   permutef();
//   return result;
//
//   function permutef() {
//     if (list.length == len) {
//       result.push(list.slice());
//       return;
//     }
//     for (var i = 0; i < len; i++) {
//       if (used[i]) continue;
//       if (i > 0 && !used[i - 1] && nums[i] == nums[i - 1]) continue;
//       used[i] = true;
//       list.push(nums[i]);
//       permutef();
//       used[i] = false;
//       list.pop();
//     }
//   }
// };

console.log(permuteUnique([1,2,4]))