/**
 * Created by jwdn on 2017/1/2.
 */
//1 判断单词是否回环 指向同的词汇或者句子，在下文中调换位置或颠倒过来
//mamam redivider
function checkPalindrom(str){
  return str = str.split('').reverse().join('');
  //reverse() 方法用于颠倒数组中元素的顺序。

  //stringObject.split(separator,howmany)
  //如果把空字符串 ("") 用作 separator，
  // 那么 stringObject 中的每个字符之间都会被分割。

  //join() 方法用于把数组中的所有元素放入一个字符串。
  //arrayObject.join(separator)
  //separator	可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
}
// console.log(checkPalindrom("abc"));

//去掉一组整型数组重复的值

function unique(arr){
  let hashTable = {};
  let data = [];
  for(let i=0;i<arr.length;i++){
    if(!hashTable[arr[i]]){
      hashTable[arr[i]] = true;
      data.push(arr[i]);
    }
  }
  return data
}

// console.log(unique([1,2,4,2,1,3,2]));

//统计一个字符串中出现次数最多的字母

function findMaxDuplicateChar(str){
  if(str.length == 0) return "false";
  if(str.length == 1) return str;

  let charObj = {};
  for(let i=0;i<str.length;i++){
    //stringObject.charAt(index)
    //字符串中第一个字符的下标是 0。如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。
    if(!charObj[str.charAt(i)]){
      charObj[str.charAt(i)] = 1;
    }else{
      charObj[str.charAt(i)]++;
    }
  }
  let maxChar = '',
      maxValue = 1;
  for(var k in charObj){
    if(charObj[k]>=maxValue){
      maxChar = k;
      maxValue = charObj[k];
    }
  }
  return maxChar;
}

// console.log(findMaxDuplicateChar("asdgadfgxzcbjgvasjkdfgasjasdf"));


//排序
//1冒泡算法
function bubbleSort(arr){
  for(let i=0,l=arr.length;i<l-1;i++){
    for(let j=i+1;j<l;j++){
      if(arr[i]>arr[j]){
        let tem = arr[j];
        arr[j] = arr[i];
        arr[i] = tem;
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([2,345,234,1,25,3,2,5,24,22]));

//2快速排序
function quickSort(arr){
  if(arr.length <=  1){
    return arr
  }
  let leftArr = [];
  let rightArr = [];
  let q = arr[0];
  for(let i=1,l=arr.length;i<l;i++){
    if(arr[i]>q){
      rightArr.push(arr[i])
    }else{
      leftArr.push(arr[i]);
    }
  }
  return [].concat(quickSort(leftArr),[q],quickSort(rightArr))
}

// console.log(quickSort([2,345,234,1,25,3,2,5,24,22]));

//5不借助临时变量，进行两个变量的交换

function swap(a,b){
  b = b-a;
  a = a+b;
  b = a-b;
  return [a,b]
}

//使用canvas绘制一个有限度的斐波那契数列的曲线

function getFibonacci(n){
  var fibarr = [];
  var i = 0;
  while(i<n){
    if(i<=1){
      fibarr.push(i);
    }else{
      fibarr.push(fibarr[i-1]+fibarr[i-2])
    }
    i++;
  }
  return fibarr;
}

//7找出下列正数组的最大差值

function getMaxProfit(arr){
  var minPrice = arr[0];
  var MaxProfit = 0;
  for(var i=0;i<arr.length;i++){
    var currentPrice = arr[i];
    minPrice = Math.min(minPrice,currentPrice);
    var potentialProfit = currentPrice - minPrice;
    MaxProfit = Math.max(potentialProfit,MaxProfit)
  }
  return MaxProfit;
}

//8随机生成制定长度的字符串

function randomString(n){
  let str = 'abcdefghijklmnoqprstuvwxyz0123456789';
  let tmp = '',
      i=0,
      l =str.length;
  for(i=0;i<n;i++){
    tmp += str.charAt(Math.floor(Math.random()*l))
  }
  /*
  Math.floor
  Math.ceil
  * */
  return tmp;
}

// console.log(randomString(10));


//9 实现类似getElementsByClassName的功能
//自己实现一个函数，查找某个DOM节点下面包含某个class的所有DOM节点

function queryClassName(node,name){
  var starts = `(^|[\n\r\t\f])`,
      ends = `([\n\r\t\f]|$)`;
  var array = [],
      regex = new RegExp(starts + name + ends),
      elements = node.getElementsByTagName("*"),
      length = elements.length,
      i=0,
      element;
  while(i<length){
    element = elements[i];
    if(regex.test(element.className)){
      array.push(element)
    }
    i++;
  }
  return array;
}