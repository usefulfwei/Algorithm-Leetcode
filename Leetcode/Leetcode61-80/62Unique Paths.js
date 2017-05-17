/**
 *
 Created by jwdn on 2017/5/5.

 A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

 The robot can only move either down or right at any point in time. The robot is trying to reach the
 bottom-right corner of the grid (marked 'Finish' in the diagram below).

 这个问题稍一分析就发现超级简单，本质上是一个杨晖三角，
 也就是说每一个格子的结果有如下的通项公式，

 s[i,j] = s[i-1, j] + s[i, j-1]

 因为每一个格子的路径要么从左边过来的，要么从上边过来的。

 当然JavaScript处理多维数组一向是很坑爹的。听说用new Array(）来初始化数组，
 然后直接赋值比一个一个push效率要高。

 */

var uniquePaths = function (m,n) {

  var mtx = createMatrix(m,n);
  return mtx[m-1][n-1];

  function createMatrix(m,n) {
    var mtx = new Array(m);

    for(var i=0;i<m;i++){
      var arr = new Array(n);
      for(var j=0;j<n;i++){
        if(i===0 || j===0) arr[j] = 1;
        else{
          arr[j] = mtx[i-1][j]+arr[j-1];
        }
      }
      mtx[i] = arr;
    }
    return mtx;
  }
};