/**
 * Created by jwdn on 2017/5/9.
 */
var arr = [1,42,5,23,523,42,3,5];

console.log(arr.sort());
// 1 23 3 42 42 5 5 523
console.log(arr.sort((x,y)=>{
  return x-y
}));
//1,3,5,5,23,42,42,523

// console.log(arr.sort());

var binarySearch = function(arr,l,r,x){
  var len = arr.length;
  if(arr.indexOf(x) == -1) return false;
  if(l<0 || r>len-1) return false;
  while(l<=r){
    var m = Math.floor((l+r)/2)
    if(arr[m]==x) return m;
    else if(T[m]>x) r = m-1;
    else l = m+1;
  }
  return false;
}