/**
 * Created by jwdn on 2017/5/1.

Given a collection of distinct numbers, return all possible permutations.

    For example,
    [1,2,3] have the following permutations:

    [
      [1,2,3],
      [1,3,2],
      [2,1,3],
      [2,3,1],
      [3,1,2],
      [3,2,1]
    ]

这种permutations是典型的穷举法，而穷举法一般用递归来解。在操作数组上，
有两个JavaScript的函数比较有用，一个是slice()，一个是splice()。
slice()可以返回一个copy，而splice()可以在某个位置添加或者删除元素。

 */

var permute = function(nums){

  var len = nums.length;
  return permutef(len-1);

  function permutef(i){
    if(i === 0) return [[nums[0]]];
    // 1
    else if (i===1) return [[nums[0],nums[1]],[nums[1],nums[0]]];
    // 12 21

    //312 132 123 321 231 213



    var ans1 = permutef(i-1);
    var size = ans1.length;
    var ans2 = [];
    var num = nums[i];

    for(var k=0;k<size;k++){
      for(var l=0;l<i;l++){
        var arr = ans1[k].slice();
        arr.splice(l,0,num);
        ans2.push(arr);
      }
    }
    return ans2;
  }
};

/*
 上面那个方法是用递归+添加，因为数组中的元素各不相同，
 所以可以放心大胆地在递归函数里遍历所有的位置，但如果有相同的元素，那种方法就无法延伸了。
 所以这里我们再加另外一种递归+回溯（recursive backtracking)的方法。这种方法便于延伸。

 所以这里我们再加另外一种递归+回溯（recursive backtracking)的方法。
 这种方法便于延伸。

 具体思路就是维护两个数组list和used, 其中list是要打印的一种组合（一开始是空，
 慢慢地满了以后，就开始不停地打），used是一种加速机制（也就是没有也是可以滴）
 ，used[i]的意思是nums[I]在不在list里（因为list满了以后，每次会替换一个元素,
 used就用在替换过程当中）。

 递归函数没有参数，因为list和used都放在外边了。

* */

var permute2 = function (nums) {
  var len = nums.length;
  var result = [];
  var list = [];
  var used = [];

  for(var i=0;i<len;i++){
    used.push(false);
  }
  permutef();

  return result;

  function permutef(){
    if(list.length == len){
      result.push(list.slice());
      return;
    }

    for(var i=0;i<len;i++){
      if(used[i]) continue;
      used[i] = true;
      list.push(nums[i]);
      permutef();
      used[i] = false;
      list.pop();
    }
  }
}


var permute3 = function(nums) {
  var len = nums.length;
  var result = [];
  var list = [];
  var used = [];
  for (var i = 0; i < len; i++) {
    used.push(false);
  }
  permutef();
  return result;

  function permutef() {
    if (list.length == len) {
      result.push(list.slice());
      return;
    }
    for (var i = 0; i < len; i++) {
      if (used[i]) continue;
      used[i] = true;
      list.push(nums[i]);
      permutef();
      used[i] = false;
      list.pop();
    }
  }
};
