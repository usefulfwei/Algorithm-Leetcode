/**
 * Created by jwdn on 2017/5/1.

Given n non-negative integers representing an elevation map where
the width of each bar is 1, compute how much water it is able to trap after raining.

    For example,
    Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

这个问题虽然被标注为Hard，但我还是比较顺利地做出来了，因为算法好像比较直观。就是扫描数组。
我用iL来表示左边接水的边界，从iL+1开始，寻找高度大于等于height(iL)的iR,
    同时记录在寻找过程中最高的那个位置，我把它标记为iMax, 如果找到了iR,
    那就计算[iL, iR]中间的接水，没找到的话，


计算[iL, iMax]中间的接水，


 注意，两个接水计算是不一样的，一个以左边为高度，一个以右边为高度。
 */

var trap = function (height) {

  var len = height.length;
  var iL = 0;
  var res = 0;

  while(iL < len -1){
    var iR = iL+1;
    var iMax = 0;
    var hMax = 0;

    while(height[iR] <  height[iL]){

      //能进入的左侧一定高于右侧
      if(height[iR] >= hMax){
        hMax = height[iR];
        iMax = iR;
      }
      iR++;
    }

    //iR > iL 以左侧高度为基准 左侧低于右侧
    if(iR < len){
      if(iR-iL >1) res += calcL(iL,iR);
      iL = iR;
    }

    //找到了末尾，以 右侧高度为基准
    else{
      //iL iMax 右侧高度为基准  iL iMax iR 4003002
      if(iMax-iL > 1) res += calcR(iL,iMax);
      iL = iMax;
    }
  }
  return res;

  function calcL(iL,iR){
    var a = 0;
    var h = height[iL];
    for(var i=iL +1;i<iR;i++){
      a += h-height[i];
    }
    return a;
  }

  function calcR(iL,iR){
    var a = 0;
    var h = height[iR];
    for(var i=iR -1;i>iL;i--){
      a += h-height[i];
    }
    return a;
  }
}

console.log(trap([0,100,0,2,1,0,1,3,2,1,2,0]))