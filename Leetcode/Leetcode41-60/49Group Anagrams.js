/**
 * Created by jwdn on 2017/5/2.
 *
 *
 *
 Given an array of strings, group anagrams together.

 For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
 Return:

 [
 ["ate", "eat","tea"],
 ["nat","tan"],
 ["bat"]
 ]


 Note: All inputs will be in lower-case.

 这道题比较简单，也就是扫描，对每一个字符串，求出排序后的字符串，以它为key，
 寻找结果里有没有这个key，有就添加在内容里，没有就新建这个key，最后扫描结果，打印，完事。

 hasOwnProperty(prop)

 所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象
 是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。
 */

var groupAnagrams = function (strs) {
  var groups = {};
  for(var i=0;i<strs.length;i++){
    var str = strs[i];
    var key = restring();
    if(!groups.hasOwnProperty(key)){
      groups[key] = [str];
    }else{
      groups[key].push(str);
    }
  }

  var res = [];

  //这里只是让输出的结果更好看
  for(key in groups){
    if(groups.hasOwnProperty(key)){
      res.push(groups[key].sort());
    }
  }

  return res;

  function restring(str){
    var arr = str.split("");
    arr.sort();
    return arr.join("");
  }
}
