/*Implement next permutation, which rearranges numbers into the lexicographically next greater
 permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order
 (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs 
are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

 

https://leetcode.com/problems/next-permutation/

要寻找下一个permutation，首先要找到最后一个ascending的次序（如果找不到的话，那就是全部descending了，
直接swap成全部ascending），找到以后（我把次序前一位叫做permIndexL, 它的值叫permL），
把那个次序后边的数都swap一下（descending变成ascending），然后在这个序列里找到第一个>permL的位置
（我把它叫做permIndexR), 
然后把permIndexL和permIndexR的值交换一下就可以了。*/

var nextPermutation = function(nums){
	var len = nums.length;
	//次序前一位叫做permIndexL, 它的值叫permL
	var permIndexL = len-1;
	var permIndexR;
	var permL;
	var i;
	for(i = len-1;i>=1;i--){
		if(nums[i-1] < nums[i]){
			permIndexL = i-1;
			break;
		}
	}
	if(permIndexL == len-1){
		swap(0,len-1);
	}
	else{
		permL = nums[permIndexL];
		swap(permIndexL + 1; len-1);
		find(permIndexL + 1; len-1 ,permL);
		nums[permIndexL] = nums[permIndexR];
		nums[permIndexR] = permL;
	}

	function swap(start,end){
		var halfLen = Math.floor((end+1-start)/2);
		for(var i=0;i<halfLen;i++){
			var num = nums[start+i];
			nums[start+1] = nums[end - i];
			nums[end-i] = num;
		}
	}
	function find(start,end,perm){
		for(var i=start;i<=end;i++){
			if(nums[i]>perm) break;
		}
		permIndexR = i;
	}
}