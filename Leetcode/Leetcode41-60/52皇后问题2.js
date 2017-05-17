/**
 * Created by jwdn on 2017/5/2.
 * 只需要一个总数。
 */

var totalNQueens = function (n) {
  var result = 0;
  var queens = [];
  solve(0);
  return result;

  function solve(row){
    if(row == n){
      result++;
      return;
    }

    for(var col = 0;col<n;col++){
      if(isSafe(row,col)){
        queens.push(col);
        solve(row+1);
        queens.pop();
      }
    }
  }

  function isSafe(row,col) {
    var len = queens.length;

    for(var i=0;i<len;i++){
      if(col == queens[i]) return false;
      if(Math.abs(row-i) == Math.abs(col-queens[i])) return false;
    }
    return true;
  }
}

console.log(totalNQueens(4));