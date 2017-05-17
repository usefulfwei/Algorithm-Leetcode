/* Longest Common Prefix

 Write a function to find the longest common prefix string
  amongst 
  an array of strings.

https://leetcode.com/problems/longest-common-prefix/

这个题好像没什么好说的，就是依次扫描而已。*/

var longestCommonPrefix = function(str){
	if(strs === null || strs.length === 0) return "";
	var len = strs.reduce(function(num,str){
		return Math.min(num,str.length)
	},Infinity);
	//找出数组中最短的字符串的长度
	if(len == 0) return "";
	for(var i=0;i<len;i++){
		var char = strs[0].charAt(i);
		for(var j=1;j<strs.length,j++){
			var char2 = strs[j].charAt(i);
			if(char2 !== char){
				return strs[0].substring(0,i);
			}
		}
	}
	return strs[0].substring(0,len);
	//stringObject.substr(start,length)
	//length	可选。子串中的字符数。
	//substr() 的参数指定的是子串的开始位置和长度
	//substring 指定的是下标
	//stop	可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。
}