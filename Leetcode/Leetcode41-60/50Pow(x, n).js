/**
 * Created by jwdn on 2017/5/2.
 * Implement pow(x, n).
 */


var myPow = function(x, n) {
  if (n === 0) return 1;
  else if (n < 0) return 1/powf(x,-n);
  return powf(x, n);

  function powf(x, n) {
    if (n == 1) return x;
    if (n % 2 === 0) {
      var v = powf(x, n / 2);
      return v * v;
    }
    else {
      v = powf(x, (n - 1) / 2);
      return v * v * x;
    }
  }
};

var myPow2 = function(x,n){
  var result = 1;
  if(n===0) return 1;
  else if(n<0){
    for(var i=0;i<Math.abs(n);i++){
      result=result*(1/x);
    }
    result=result+Math.sqrt(x,Math.abs(n)-i+1);
  }
  else{
    for(var i=0;i<n;i++){
      result = result*x
    }
    result=result+Math.sqrt(x,n-i+1);
  }
}

console.log(myPow(3,0.5));