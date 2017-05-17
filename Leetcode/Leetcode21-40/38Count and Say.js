/*The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.*/

var countAndSay = function(n){
	var a = ['1'];

	for(var i=1;i<n;i++){
		a = nextSeq(a);
	}
	return a.join("");

	function nextSeq(arr){
		var len = arr.length;
		var nextArr = [];
		var iLeft = 0;
		var i = iLeft;
		while(i<len){

			while(arr[i] == arr[iLeft] && i < len) i++;

			var num = i-iLeft;
			//num 有几个相同的

			nextArr.push(num.toString());
			nextArr.push(arr[iLeft]);

			iLeft = i;
			//移动下标统计下一个数字 下标从0开始，正好
		}
		return nextArr;
	}
}
console.log(countAndSay(1));//1
console.log(countAndSay(2));//11
console.log(countAndSay(3));//21
console.log(countAndSay(4));//1211
console.log(countAndSay(5));//111221 一个1一个2两个1
console.log(countAndSay(6));//3个1两个2一个1 312211
console.log(countAndSay(7));
console.log(countAndSay(8));
console.log(countAndSay(9));
console.log(countAndSay(10));
console.log(countAndSay(11));