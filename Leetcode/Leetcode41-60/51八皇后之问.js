/**
 * Created by jwdn on 2017/5/2.
 *
 * 宫格里面 同一行、同一列或同一斜线上 有且只有一个皇后 Queen
 */


// var solveQueens = function (n) {
//   var result = [];
//   var queens = [];
//   solve(0)
//   return result;
//
//   function solve(n){
//     if(row == 0) {
//       result.push(format(queens))
//       return;
//     }
//     for(var col = 0;col<n;col++){
//       if(isSafe(row,col)){
//         queens.push(col);
//         solve(row+1);
//         queens.pop();
//       }
//     }
//   }
//
//   function isSafe(row,col){
//     var len = queens.length;
//     for(var i=0;i<len;i++){
//       if(col == queens[i]) return false;
//       if(Math.abs(row-i)==Math.abs(col - queens[i])) return false;
//     }
//     return true;
//   }
//
//   function format(queens) {
//     if(queens.length != n) return null;
//     var res = [];
//     for(var i=0;i<n;i++){
//       var row = [];
//       for(var j=0;j<n;j++){
//         row[j] = (queens[i] == j) ? 'Q': '.';
//       }
//       res.push(row.join(""));
//     }
//     return res;
//   }
// }

var solveNQueens = function(n) {
  var result = [];
  var queens = [];
  solve(0);
  return result;

  function solve(row) {
    if (row == n) {
      result.push(format(queens));
      return;
    }
    for (var col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        console.log('push  '+col);
        queens.push(col);

        solve(row + 1);

        var poped = queens.pop();
        console.log('poped  '+poped);
      }
    }
  }
  // 0 0
  // 1 0

  function isSafe(row, col){

    var len = queens.length;

    for (var i = 0; i < len; i++) {
      if (col == queens[i]) return false;
      if (Math.abs(row - i) == Math.abs(col - queens[i])) return false;
    }

    return true;
  }

  function format(queens) {

    if (queens.length != n) return null;

    var res = [];

    for (var i = 0; i < n; i++) {
      var row = [];

      for (var j = 0; j < n; j++) {
        row[j] = (queens[i] == j) ? 'Q' : '.';
      }

      res.push(row.join(""));
    }
    return res;
  }
};

console.log(solveNQueens(4));