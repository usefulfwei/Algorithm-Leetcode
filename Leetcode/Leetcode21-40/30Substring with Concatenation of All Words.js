/*You are given a string, s, and a list of words, words, that are all of the same length.
 Find all starting indices of substring(s) in s that is a concatenation of each word in 
 words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).

https://leetcode.com/problems/substring-with-concatenation-of-all-words/

这道题的标注是Hard，可事实上这题好像没啥难度。我一次递交就通过了。

我的解题思路当然还是扫描，从开头扫到一个结束的位置。在循环内，先把数组copy，
然后在数组里寻找字符串，找到了就把数组里那个元素删了，继续寻找下一个字符串，直到数组成空（表示所有字符串都找到了）。*/

/*s: "barfoothefoobarman"
words: ["foo", "bar"]*/

var findSubstring = function(s,words){
	var sLen = s.length;
	var wordLen = words[0].length;
	//that are all of the same length.
	var arrLen = words.length;

	var subLen = wordLen*arrLen;
	var result = [];
	for(var i=0;i<=sLen-subLen;i++){
		var iPos = i;
		//copy words to array
		var array = words.slice();
		while(array.length>0){
			var str = s.substring(iPos,iPos+wordLen);
			var index = array.indexOf(str);
			if(index<0) break;
			array.splice(index,1);
			iPos+=wordLen;
		}
		//从break 中跳出后来到这里 防止重复
		if(array.length === 0){
			result.push(i);
		}
	}
	return result;
}

console.log(findSubstring("barfoothefoobarman",["foo", "bar"]));