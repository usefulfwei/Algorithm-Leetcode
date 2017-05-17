/**
 * Created by jwdn on 2017/5/1.

Given a set of candidate numbers (C) and a target number (T),
    find all unique combinations in C where the candidate numbers sums to T.

    The same repeated number may be chosen from C unlimited number of times.

    Note:

All numbers (including target) will be positive integers.
    The solution set must not contain duplicate combinations.


For example, given candidate set [2, 3, 6, 7] and target 7,
    A solution set is:

    [
      [7],
      [2, 2, 3]
    ]

不过我的算法还算比较清晰，首先剔除重复元素，然后给数组升序，得到一个uniqueC数组。
遍历函数traverse里面有三个变量，第一个是当前的list，第二个是这个list里的数之和，第三个是遍历uniqueC的位置。因为允许重复元素，
所以里面的traverse的最后一个变量依然从i开始。

遍历函数traverse里主要是一个从iPos到candiates最后一个元素的循环，newSum是个试探值，
如果太大，果断break（这个break其实跟return是一样的，因为后面的数越来越大，没必要循环下去了），
如果正好，那么打印结果（这里的push和pop纯粹是为了输出正确的结果），
如果小了，那么继续call遍历函数traverse。这个算法居然beat 90%，相当不错啊。

 */

var combinationSum = function(candidates,target){
  var uniqueC = function () {
    var len = candidates.length;
    var arr = [];
    for(var i=0;i<len;i++){
      if(candidates[i]>target) continue;
      if(arr.indexOf(candidates[i] ==  -1)) arr.push(candidates[i]);
      //去重，而且大于目标的不要
    }
    return arr;
  }();

  uniqueC.sort((x,y)=>x-y); //给数组升序

  var len = uniqueC.length;
  var result = [];
  traverse([],0,0);
  return result;

  //第一个是当前的list，第二个是这个list里的数之和，第三个是遍历uniqueC的位置
  function traverse(list,sum,iPos){
    for(var i=iPos; i<len;i++){

      var newSum = sum + uniqueC[i];

      if(newSum > target) break;

      else if(newSum == target){
        list.push(uniqueC[i]);
        console.log('reach goal'+uniqueC[i]);
        //slice 选取全部list

        result.push(list.slice());
        var poped = list.pop();
        console.log('poped'+poped);
        break;
      }else{
        list.push(uniqueC[i]);
        console.log('prepare'+uniqueC[i]);
        traverse(list,newSum,i);
        var poped2 = list.pop();
        console.log('2poped'+poped2);
      }
    }
  }
}

//console.log(combinationSum([2,3,6,7],7));
console.log(combinationSum([1,2,3,5,7],8));

