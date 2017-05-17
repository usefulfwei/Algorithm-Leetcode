/**
 * Created by jwdn on 2017/5/2.
 *
 iven a matrix of m x n elements (m rows, n columns), return all elements of the matrix
 in spiral order.

 For example,
 Given the following matrix:

 [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
 ]
 You should return [1,2,3,6,9,8,7,4,5].

 https://leetcode.com/problems/spiral-matrix/

 这个题目其实没什么难度，主要是在寻找下一个
 位置的时候比较繁琐。我用一个辅助矩阵来标记走过没有。走过就折向，否则就沿着原来的方向。
 */

var spiralOrder = function (matrix) {
  var iLen = matrix.length;
  if(iLen == 0) return [];
  var jLen = matrix[0].length;

  var mark = [];
  var res = [];

  return res;

  function initMark(){
    for(var i=0;i<iLen;i++){
      var m = [];
      for(var j=0;j<jLen;j++){
        m.push(false);
        mark.push(m);
      }
    }
  }

  function spiral(i,j,dir){
    mark[i][j] = true;
    res.push(matrix[i][j]);
    var next = nextStep(i,j,dir);
    if(next == null) return;
    else spiral(next[0],next[1],next[2]);
  }

  function nextStep(i,j,dir){
    switch (dir){
      case 0://right
        if(j+1 == jLen || mark[i][j+1]){
          if(i+1 == iLen || mark[i+1][j]) return null;
          else{
            return [i+1,j,1];
          }
        }else{

          return [i,j+1,0];

        }
        break;
      case 1://down
        if(i+1 == iLen || mark[i+1][j]){
          if(j-1<0 || mark[i][j-1]) return null;
          else{
            return [i,j-1,2]
          }
        }else{

          return [i+1,j,1];

        }
        break;
      case 2://left
        if(j-1<0 || mark[i][j-1]){
         if(i-1<0 || mark[i-1][j]) return null;
         else{
           return [i-1,j,3];
         }
        }else{

          return [i,j-1,2]

        }
        break;
      case 3://up
        if(i-1<0 || mark[i-1][j]){
          if(j+1 == jLen || mark[i][j+1]) return null;
          else{
            return [i,j+1,0];
          }
        }else{

          return [i-1,j,3];

        }
        break;
      default:
        return null;
    }
  }
}

var spiralOrder = function(matrix) {

  var iLen = matrix.length;
  if (iLen === 0) return [];
  var jLen = matrix[0].length;
  var mark = [];
  var res = [];

  initMark();
  spiral(0, 0, 0);

  return res;

  function initMark() {
    for (var i = 0; i < iLen; i++) {
      var m = [];
      for (var j = 0; j < jLen; j++) {
        m.push(false);
      }
      mark.push(m);
    }
  }

  function spiral(i, j, dir) {
    mark[i][j] = true;
    res.push(matrix[i][j]);
    var next = nextStep(i, j, dir);
    if (next == null) return;
    else spiral(next[0], next[1], next[2]);
  }

  function nextStep(i, j, dir) {
    switch (dir) {
      case 0: //right
        if (j + 1 == jLen || mark[i][j + 1]) {
          if (i + 1 == iLen || mark[i + 1][j]) return null;
          else {
            return [i + 1, j, 1];
          }
        }
        else {

          return [i, j + 1, 0];

        }
        break;
      case 1:  //down
        if (i + 1 == iLen || mark[i + 1][j]) {
          if (j - 1 < 0 || mark[i][j - 1]) return null;
          else {
            return [i, j - 1, 2];
          }
        }
        else {

          return [i + 1, j, 1];

        }
        break;
      case 2://left
        if (j - 1 < 0 || mark[i][j - 1]) {
          if (i - 1 < 0 || mark[i - 1][j]) return null;
          else {
            return [i - 1, j, 3];
          }
        }
        else {

          return [i, j - 1, 2];

        }
        break;
      case 3: //up
        if (i - 1 < 0 || mark[i - 1][j]) {
          if (j + 1 == jLen || mark[i][j + 1]) return null;
          else {
            return [i, j + 1, 0];
          }
        }
        else {

          return [i - 1, j, 3];

        }
        break;

      default:
        return null;
    }

  }
};


