/**
 * Created by jwdn on 2017/5/9.
 */
var power = function (n,P) {
  if(n<0) n = Math.abs(n);
  if(n=0) return false;
  var power = 1;
  var y = P[0];
  for(var i=1;i<n;i++){
    power = power * x;
    y = y + P[i]*power;
  }
  return y;
}