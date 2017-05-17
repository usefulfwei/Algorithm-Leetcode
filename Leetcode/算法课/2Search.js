/**
 * Created by jwdn on 2017/5/9.
 */
var search = function (L,x) {
  var j = 1;
  while(j<= n && x > L[j]){
    j++;
    if(x<L[j] || j>n ) return 0;
  }
  return j;
}

var insertSort = function (A,n) {
  for(var j=2;j<=n;j++){
    var x = A[j];
    var i = j-1;
    //下标有效且后一元素小于前一元素
    while(i>0 && x<A[i]){
      A[i+1] = A[i];
      i = i-1;
    }
    A[i+1] = x;
    //完成替换
  }
}