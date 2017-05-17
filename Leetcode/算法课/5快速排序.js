/**
 * Created by jwdn on 2017/5/9.
 */

var quickSort = function (arr) {
  var len = arr.length,leftArr = [],rightArr = [],tag;

  if(len<2) return arr;

  tag = arr[0];

  for(var i=1;i<len;i++){
    if(arr[i]<=tag){
      leftArr.push(arr[i])
    }else{
      rightArr.push(arr[i])
    }
  }
  return quickSort(leftArr).concat(tag,quickSort(rightArr));
}
