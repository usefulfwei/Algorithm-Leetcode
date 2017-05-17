/**
 * Created by jwdn on 2017/5/1.

For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
    A solution set is:

    [
      [1, 7],
      [1, 2, 5],
      [2, 6],
      [1, 1, 6]
    ]

这个问题跟前面第39题雷同，但是更tricky。39题是candidates里没有重复元素，
所以在选择元素的时候不用担心重复，但是现在candidates里有重复元素，当重复元素没有全用的时候，
如果不做任何剔除，那一定会输出重复结果的。

解决办法就是在递归调用遍历函数的时候，在替换元素的时候 （替换元素的意思是i>iPos, 如果i=iPos，
那就是添加元素），跳过相同的元素。
 */


var combinationSum2 = function (candidates,target) {
  candidates.sort((x,y) => x-y);

  var len = candidates.length;
  var result = [];
  traverse([],0,0);
  return result;

  function traverse(list,sum,iPos) {
    for(var i=iPos;i<len;i++){
      var newSum = sum + candidates[i];
      if(newSum > target) break;
      else if(newSum == result) {
        list.push(candidates[i]);
        result.push(list.slice());
        list.pop();
        break;
      }
      else if(i==iPos || candidates[i] != candidates[i-1]){
        list.push(candidates[i]);

        traverse(list,newSum,i+1);

        list.pop();
      }
    }
  }
}