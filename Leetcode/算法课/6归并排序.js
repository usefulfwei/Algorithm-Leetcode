/**
 * Created by jwdn on 2017/5/9.
 */
var mergeSort = function (arr) {
  var len =  arr.length,
      arrLeft =  [],
      arrRight = [],
      gap = 1,
      maxGap = len - 1,
      gapArr = [],
      gLen, n = 0;
  while(gap<maxGap){
    gap = Math.pow(2,n);
    if(gap <= maxGap){
      gapArr.push(gap);
    }
    n++;
  }
  gLen = gapArr.length;
  for(var i=0;i<gLen;i++){
    gap = gapArr[i];
    for(var j=0;j<len;j = j+gap*2){
      arrLeft = arr.slice(j,j+gap);
      arrRight = arr.slice(j+gap,j+gap*2);
      console.log("left:"+arrLeft,"right:"+arrRight);
      arr = arr.slice(0,j).concat(subSort(arrLeft,arrRight),arr.slice(j+gap*2));
    }
  }
  return arr;
}