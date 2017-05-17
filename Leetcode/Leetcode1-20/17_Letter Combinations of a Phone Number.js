/*Letter Combinations of a Phone Number
联想手机打字
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.

 

https://leetcode.com/problems/letter-combinations-of-a-phone-number/

这个题的要点是给一个数组，里面是不同长度的数组，求出各种组合。那是一个超级经典的问题，最普通最常见的解法就是用递归。*/

var letterCombinations = function(digits){
	telephoneNumbers = [
		[" "],
		[""],
		["a","b","c"],
		["d","e","f"],
		["g","h","i"],
		["j","k","l"],
		["m","n","o"],
		["p","q","r","s"],
		["t","u","v"],
		["w","x","y","z"]
	];
	var len = digital.length;
	if(len===0) return [];
	var arrays = new Array(len);
	for(var i=0;i<len;i++){
		arrays[i] = telephoneNumbers[digits[i]]
	}
	return allPossibleCases(arrays);
}

function allPossibleCases(arrays){
	if(arrays.length == 1) return arrays[0];
	var result = [];
	var allCasesOfRest = allPossibleCases(arrays.slice(1))
	// recur with the rest of array
	for(var i=0;i<allCasesOfRest.length;i++){
		for(var j=0;j<arrays[0].length;j++){
			result.push(arrays[0][j]+allCasesOfRest[i])
		}
	}
	console.log(result)
	return result;
}

console.log(allPossibleCases(['a','b','c']))