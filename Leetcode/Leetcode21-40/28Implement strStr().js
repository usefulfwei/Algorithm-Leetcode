/*Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

https://leetcode.com/problems/implement-strstr/

这个题好像也没什么意思，简单扫描就可以了。*/

var strStr = function(haystack,needle){
	var len1 = haystack.length;
	var len2 = needle.length;
	for(var i=0;i<len1-len2;i++){
		if(haystack.substring(i,i+len2) == needle) return i;
		//substring(start,stop) 都是指下标  stop比要截取的位置加1
		//包括 start 处的字符，但不包括 stop 处的字符。
	}
	return -1;
}

console.log('helidakang'.substring(2));