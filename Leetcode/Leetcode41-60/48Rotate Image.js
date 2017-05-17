/**
 * Created by jwdn on 2017/5/2.

You are given an n x n 2D matrix representing an image.

    Rotate the image by 90 degrees (clockwise).
    主要是有两个注意点，一是rotate的公式是
(i , j) -> (j, n-1-i)->(n-1-i, n-1-j) -> (n-1-j, i ) -> (i , j)，

 因为是下标所以需要减一
二是循环判断的问题，
因为是4值轮换，所以只要扫描1/4区就可以，而且奇数的长度时，中心点没必要轮换。

 */

var rotate = function(matrix){
  var len = matrix.length;
  if(len == 1) return;

  var hlen  = len % 2 === 0 ? len /2 : (len+1)/2;

  for(var i=0;i<hlen;i++){

    var iRot = len - 1 - i;

    if(i == iRot) continue;
    
    for(var j=0;j<hlen;j++){
      var jRot = len-1-j;
      var v = matrix[i][j];

      matrix[i][j] = matrix[jRot][i];
      matrix[jRot][i] = matrix[iRot][jRot];
      matrix[iRot][jRot] = matrix[j][iRot];
      matrix[j][iRot] = v;
      //(i , j) -> (j, n-1-i)->(n-1-i, n-1-j) -> (n-1-j, i ) -> (i , j)，
    }
  }
}