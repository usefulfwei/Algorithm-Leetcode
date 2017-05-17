/**
 * Created by jwdn on 2017/5/9.
 */
var shellSort = function (arr) {
  var i,k,j,len = arr.length,
      gap = Math.ceil(len/2),temp;

  while(gap > 0){
    for(var k=0;k<gap;k++){
      var tagArr = [];
      tagArr.push(arr[k]);
      //i = i+gap
      for(i = k+gap;i<len;i=i+gap){
        temp = arr[i];
        tagArr.push(temp);

        for(j = i-gap;j>-1;j=j-gap){
          if(arr[j]>temp){
            arr[j+gap] = arr[j];
          }else{
            break;
          }
        }
        arr[j+gap] = temp;
      }
      console.log(tagArr,"gap:"+gap);//输出当前进行插入排序的数组。
      console.log(arr);//输出此轮排序后的数组。
    }
    gap = parseInt(gap/2);
  }
  return arr;
}