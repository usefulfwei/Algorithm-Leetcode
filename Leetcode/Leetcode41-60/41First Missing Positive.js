/**
 * Created by jwdn on 2017/5/1.

Given an unsorted integer array, find the first missing positive integer.

    For example,
    Given [1,2,0] return 3,
    and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.

    这个题目是寻找第一个missing的正整数，要求是O(n)的运算时间和固定的空间，
    ，或者另开一个数组的算法。原则上我们只要把数组中的每一个值放到与它本身值相符的位置，
再看看哪个位置没到位就是了。具体说来，就是把1放到index是0的地方，把2放到index是1的地方，
把a[i]放到index是a[i]-1的地方，那原来的值怎么办？先swap，然后index不要往前move，
应该继续考察这个被swap过来的值，如果符合条件（这个值在有效范围[1,n]内，
而且没有到位a[i] != i+1， 而且不能跟要swap的值相同（a[i] != a[a[i]-1]）。
循环结果以后，检查第一个没到位的元素就可以了。

 */

// var firstMissingPositive = function (nums) {
//   var len = nums.length;
//   var i=0;
//
//   while (i<len){
//     if(nums[i] != i+1 && nums[i]>=1 && nums[i] <= len && nums[i] != nums[nums[i] - 1]){
//       swap(i,nums[i]-1);
//     }else{
//       i++;
//     }
//   }
//
//   for(i=0;i<len;i++){
//     if(nums[i]!=i+1) return i+1;
//   }
//   return len+1;
//
//   //^= 按位异或 同零异一
//   function swap(i,j){
//     nums[i] ^= nums[j];
//     nums[j] ^= nums[i];
//     nums[i] ^= nums[j];
//   }
// }


var firstMissingPositive = function(nums) {
  var len = nums.length;
  var i = 0;
  while (i < len) {
    if (nums[i] != i + 1 && nums[i] >= 1 && nums[i] <= len && nums[i] != nums[nums[i] - 1]) {
      swap(i, nums[i] - 1);
    }
    else {
      i++;
    }
  }
  for (i = 0; i < len; i++) {
    if (nums[i] != i + 1) return i + 1;
  }
  return len + 1;

  function swap(i, j) {
    nums[i] ^= nums[j];
    nums[j] ^= nums[i];
    nums[i] ^= nums[j];
  }
};