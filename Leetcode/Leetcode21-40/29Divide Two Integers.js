/*Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.

https://leetcode.com/problems/divide-two-integers/

这个题目用JavaScript实现起来太难了。不能用乘法，不能用除法，一般都是用位操作来代替乘除。
不同的位就像是不同的台阶一样，被除数一路从台阶上滚下来，就能求出余数来。可是这个题用位操作，
永远提示是time limit exceeded， 最后只好参考别人的解答，发现用递归居然没有time limit exceeded，
我有点纳闷，都是O（LogN）的运算量，为什么一个会time limit exceeded， 另一个却安然无恙呢？在我印象里，
递归很耗资源的，层太深的话，会stack overflow的。而且一个一个call function，好像也挺费时间的。
这个题打破了我的三观。好吧，递归优于直接位操作。

下面的实现中，递归函数subtract()是关键。一般的递归函数是往数字小的方向发展，这个递归函数反其道行之，
当数字大到一定程度，其实是个空函数。subtract()函数里面有两个参数，前一个是要减掉的数，后面一个是相应得到的商，
两个是同步double的，譬如减一个divisor，得到的商是1，减2个divisor，得到的商是2， 减4个divisor， 得到的商是4，
 被减数dividend一直按兵不动， 只有当要减掉的数接近被减数的时候，才会像毒蛇出洞一样，咬一口，这个时候，
 被减数和商同时被修改。写出这个subtract函数的家伙真是牛人，我是想不出这招来。*/

 var divide = function(dividend,divisor){
 	var sign = true;
 	if(dividend<0){
 		dividend = -dividend;
 		sign = false;
 	}
 	if(divisor<0){
 		divisor = - divisor;
 		sign = !sign;
 	}
 	if(divisor == 1){
 		if(sign) return dividend <= 2147483647 ? dividend : 2147483647;
 		else return dividend <= 2147483647 ? -dividend : 2147483647;
 	}
 	if(dividend < divisor) return 0;
 	var result = 0;
 	substract(divisor,1);
 	return sign?result:-result;


 	function substract(dvs,quot){
 		if(dividend > dvs){
 			substract(dvs+dvs,quot+quot);
 		}
 		if(dividend>=dvs){
 			dividend -= dvs;
 			result += quot;
 		}
 	}
 }
 console.log(divide(324,3));

 /*
前一个是要减掉的数，后面一个是相应得到的商，
两个是同步double的，譬如减一个divisor，得到的商是1，减2个divisor，得到的商是2， 减4个divisor， 得到的商是4，
 被减数dividend一直按兵不动， 只有当要减掉的数接近被减数的时候，才会像毒蛇出洞一样，咬一口，这个时候，
 被减数和商同时被修改。写出这个subtract函数的家伙真是牛人，我是想不出这招来。
 */