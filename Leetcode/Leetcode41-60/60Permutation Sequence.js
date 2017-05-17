/**
 * Created by jwdn on 2017/5/5.
 *
 The set [1,2,3,…,n] contains a total of n! unique permutations.

 By listing and labeling all of the permutations in order,
 We get the following sequence (ie, for n = 3):

 "123"
 "132"
 "213"
 "231"
 "312"
 "321"
 Given n and k, return the kth permutation sequence.
 这个题目主要是考察程序猿的数数能力。
 这个题首先求第1位，然后根据第1位，求第2位， 第3位，...。
 我们知道，
 如果第1位固定为1的话，总共有（n-1）！种不同的排列，
 如果k小于等于（n-1)!，
 那第1位肯定是1，
 如果k小于等于2*（n-1）！，
 那第1位肯定是2， ...。
 所以由此可以推断，
 第1位的值是（k-1)/(n-1)!再加1（因为基数是1）。

 求出了第1位，那现在只剩下n-1个数了，而我们也已经排除了前a*(n-1)!种排法，
 所以接下来只需要在n-1个数里挑第k%（n-1）！个排列，跟求第1位数一样，依次类推，直到n位数全部求出来。

 实际编程过程中要注意offset，我们数数都从1开始，而计算机则是从0开始。
 */

var getPermutation = function (n,k) {
  var list = [];
  for(var i=0;i<n;i++){
    list.push(i+1);
  }
  k--;
  var factorial = 1;
  for(i=2;i<n;i++){
    factorial*=i;
  }
  // n!

  var result = [];

  for(i=n-1;i>=0;i--){
    var a = Math.floor(k/factorial);
    result.push(list[a]);
    list.splice(a,1);
    k = k % factorial;
    if(i > 0) factorial/=i;
  }
  return result.join("");
}

console.log(getPermutation(5,120));
