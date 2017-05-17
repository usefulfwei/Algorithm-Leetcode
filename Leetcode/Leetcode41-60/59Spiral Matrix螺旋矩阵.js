/**
 * Created by jwdn on 2017/5/5.
 *
 Given an integer n, generate a square matrix filled
 with elements from 1 to n2 in spiral order.

 For example,
 Given n = 3,

 You should return the following matrix:

 [
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
 ]
 */

var generateMatrix = function (n) {
  if(n === 0) return [];
  var result = [];
  var seqNo = 0;
  initresult();
  spiral(0,0,0);
  return result;


  function initresult(){
    for(var i=0;i<n;i++){
      var m = [];
      for(var j=0;j<n;j++){
        m.push(null)
      }
      result.push(m)
    }
  }

  function spiral(i,j,dir) {
    result[i][j] = ++seqNo;
    var next = nextStep(i,j,dir);
    if(next === null) return;
    else spiral(next[0],next[1],next[2]);
  }


  function nextStep(i,j,dir) {
    switch (dir){
      case 0://right
        if(j+1 == n || result[i][j+1] != null){ //右侧到壁只有一步且被填充
          //下侧到壁只有一步且被填充
          if(i+1 == n || result[i+1][j] !== null) return null;
          else {
            return [i+1,j,1];//下侧
          }
        }else{
          return [i,j+1,0];//右侧
        }
        break;//不是右侧就是下侧
      case 1: //down
        if(i+1 == n || result[i+1][j] != null){ //下侧到壁只有一步且被填充
          //right侧到壁只有一步且被填充
          if(j-1 < 0 || result[i][j-1] !== null) return null;
          else {
            return [i,j-1,2];//left侧
          }
        }else{
          return [i+1,j,1];//down侧
        }
        break;//不是右侧就是下侧
      case 2: //left
        if(j-1 < 0 || result[i][j-1] != null){
          if(i-1 < 0 || result[i-1][j] !== null) return null;
          else {
            return [i-1,j,3];//up侧
          }
        }else{
          return [i,j-1,2];
        }
        break;//不是右侧就是下侧
      case 3: //up
        if(i-1 < 0 || result[i-1][j] != null){
          if(j+1 == n || result[i][j+1] !== null) return null;
          else {
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

// 0   n-1

// var generateMatrix = function(n) {
//   if (n === 0) return [];
//   var result = [];
//   var seqNo = 0;
//   initresult();
//   spiral(0, 0, 0);
//   return result;
//
//   function initresult() {
//     for (var i = 0; i < n; i++) {
//       var m = [];
//       for (var j = 0; j < n; j++) {
//         m.push(null);
//       }
//       result.push(m);
//     }
//   }
//
//   function spiral(i, j, dir) {
//     result[i][j] = ++seqNo;
//     var next = nextStep(i, j, dir);
//     if (next === null) return;
//     else spiral(next[0], next[1], next[2]);
//   }
//
//   function nextStep(i, j, dir) {
//     switch (dir) {
//       case 0: //right
//         if (j + 1 == n || result[i][j + 1] !== null) {
//           if (i + 1 == n || result[i + 1][j] !== null) return null;
//           else {
//             return [i + 1, j, 1];
//           }
//         }
//         else {
//           return [i, j + 1, 0];
//         }
//         break;
//       case 1:  //down
//         if (i + 1 == n || result[i + 1][j] !== null) {
//           if (j - 1 < 0 || result[i][j - 1] !== null) return null;
//           else {
//             return [i, j - 1, 2];
//           }
//         }
//         else {
//           return [i + 1, j, 1];
//         }
//         break;
//       case 2://left
//         if (j - 1 < 0 || result[i][j - 1] !== null) {
//           if (i - 1 < 0 || result[i - 1][j] !== null) return null;
//           else {
//             return [i - 1, j, 3];
//           }
//         }
//         else {
//           return [i, j - 1, 2];
//         }
//         break;
//       case 3: //up
//         if (i - 1 < 0 || result[i - 1][j] !== null) {
//           if (j + 1 == n || result[i][j + 1] !== null) return null;
//           else {
//             return [i, j + 1, 0];
//           }
//         }
//         else {
//           return [i - 1, j, 3];
//         }
//         break;
//
//       default:
//         return null;
//     }
//
//   }
// };

console.log(generateMatrix(6));