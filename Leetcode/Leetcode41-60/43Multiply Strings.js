/**
 * Created by jwdn on 2017/5/1.

Given two numbers represented as strings, return multiplication of the numbers as a string.

    Note:

The numbers can be arbitrarily large and are non-negative.
    Converting the input string to integer is NOT allowed.
    You should NOT use internal library such as BigInteger.

这个题目好像就是要求我们像小学生那样一位一位地相乘，有进位就加一。对于中国人来说，太熟悉了。

我的具体做法是先把string转化成单位数的数组，再reverse一下，这样个位在0位置，十位在1位置，
方便进位加一和把乘积放进正确的位置。

step()函数就是把I位的数加一，因为可能会引起连锁反应，所以需要一个小循环。
 */

var multiply = function(num1,num2){
  if(num1 === '0' || num2 === '0') return '0';
  var arr1 = num1.split('').reverse();
  var arr2 = num2.split('').reverse();
  var len1 = arr1.length;
  var len2 = arr2.length;
  var arr = [];
  for(var i=0;i<len1+len2;i++){
    arr[i] = 0;
  }
  for(i=0;i<len1;i++){
    for(var j=0;j<len2;j++){

      var d1 = Number(arr1[i]);
      var d2 = Number(arr2[j]);
      var d = d1 * d2;
      if(d<10){
        arr[i+j]+=d;
        if(arr[i+j]>9){
          arr[i+j]-=10;
          step(i+j+1);
        }
      }else{
        arr[i+j]+= (d%10);
        if(arr[i+j]>9){
          arr[i+j] -= 10;
          step(i+j+1);
        }
        arr[i+j+1] +=Math.floor(d/10);
        if(arr[i+j+1] > 9){
          arr[i+j+1]-=10;
          step(i+j+2);
        }
      }
    }
  }

  var str = "";

  i = len1 + len2 - 1;
  while(arr[i] === 0) i--;
  //起初的0省略

  for(j=i;j>=0;j--){
    str = str + arr[j];
  }

  return str;

  function step(n){
    var i=n;
    arr[i]++;
    while(arr[i] == 10){
      arr[i] = 0;
      i++;
      arr[i]++;
    }
  }
}
console.log(multiply('8','8'));