/**
 * Created by jwdn on 2017/5/9.
 */


var subSort = function(arr1,arr2){
  var len1 = arr1.length;
  var len2 = arr2.length;
  var i=0,j=0,arr3 = [],bArr1 = arr1.slice()
      ,bArr2 = arr2.slice();

  while(bArr1.length != 0 || bArr2.length !=0){
    if(bArr1.length == 0){
      arr3 = arr3.concat(bArr2);
      bArr2.length = 0;
    }else if(bArr2.length == 0){
      arr3 = arr3.concat(bArr1);
      bArr1.length = 0;
    }else{
      if(bArr1[0]<=bArr2[0]){
        arr3.push(bArr1[0]);
        bArr1.shift();
      }else{
        arr3.push(bArr2[0]);
        bArr2.shift();
      }
    }
  }
  return arr3;
}