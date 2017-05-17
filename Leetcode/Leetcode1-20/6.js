/*The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

 

Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

https://leetcode.com/problems/zigzag-conversion/

这个问题不算复杂，但对中国人来说，理解ZigZag有点费劲。事实上，ZigZag是这样滴，     

n=numRows
Δ=2n-2    1                           2n-1                         4n-3
Δ=        2                     2n-2  2n                    4n-4   4n-2
Δ=        3               2n-3        2n+1              4n-5       .
Δ=        .           .               .               .            .
Δ=        .       n+2                 .           3n               .
Δ=        n-1 n+1                     3n-3    3n-1                 5n-5
Δ=2n-2    n                           3n-2                         5n-4

理解了ZigZag，编程就不是大问题了。*/

var convert = function(s,numRows){
	if(numRows == 1) return s;
	var rowCur = 0;
	var colCur = 0;
	var bVertical = true;
	var len = s.length;
	var arrays = [];
	for(var posCur = 0;posCur < len; posCur++){
		if(posCur < numRows){
			arrays[rowCur] = [s.charAt(posCur)];
		}else{
			arrays[rowCur].push(s.charAt(posCur));
		}

		if(bVertical){
			if(rowCur == numRows-1){
				rowCur--;
				colCur++;
				bVertical = false;
			}else{
				rowCur++;
			}
		}else{
			if(rowCur == 0){
				rowCur++;
				bVertical = true;
			}else{
				rowCur--;
				colCur++
			}
		}
	}
	return arrays.reduce(function(sum,array){
		return sum+array.join("");
	},"");
};
console.log(convert("PAYPALISHIRING", 3));
