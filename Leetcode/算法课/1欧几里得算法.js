/**
 * Created by jwdn on 2017/5/9.
 */

var euclid = function(m,n){
  if(m<0) m=Math.abs(m);
  if(n<0) n=Math.abs(n);
  if(m==0 || n==0) return false;
  if(Math.floor(m) != m || Math.floor(n) != n) return false;
  if(n==m) return n;

  while(m>0){
    var q = n % m;
    n = m;
    m = q;
    console.log(n);
  };
  //若大小位置不同，第一轮自动换位置
  return n;
};

console.log(euclid(36,15));