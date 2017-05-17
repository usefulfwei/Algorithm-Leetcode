/*Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

https://leetcode.com/problems/roman-to-integer/

这题是第12题的逆命题。我的解题思路就是把4位字符，3位字符，2位字符，1位字符做成数组，然后扫描字符串，从4位，3位，2位到1位。*/

var romanToInt = function (s) {
    FourStr = {
        'VIII': 8,
        'LXXX': 80,
        'DCCC': 800
    };
    ThreeStr = {
        'III': 3,
        'VII': 7,
        'XXX': 30,
        'LXX': 70,
        'CCC': 300,
        'DCC': 700,
        'MMM': 3000
    };
    TwoStr = {
        'II': 2,
        'IV': 4,
        'VI': 6,
        'IX': 9,
        'XX': 20,
        'XL': 40,
        'LX': 60,
        'XC': 90,
        'CC': 200,
        'CD': 400,
        'DC': 600,
        'CM': 900,
        'MM': 2000
    };
    OneStr = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var len =  s.length;
    var iPos = 0;
    var num = 0;
    while(iPos<len){
    	if(iPos + 3 <len){
    		var str4 = s.substring(iPos,iPos+4);
    		if(FourStr[str4] !== undefined){
    			num += FourStr[str4];
    			iPos += 4;
    			continue
    		}
    	}

    	if(iPos + 2 <len){
    		var str3 = s.substring(iPos,iPos+3);
    		if(ThreeStr[str3] !== undefined){
    			num += ThreeStr[str3];
    			iPos += 3;
    			continue
    		}
    	}
    	if(iPos + 1 <len){
    		var str2 = s.substring(iPos,iPos+2);
    		if(TwoStr[str2] !== undefined){
    			num += TwoStr[str2];
    			iPos += 2;
    			continue
    		}
    	}
    	if(iPos <len){
    		var str1 = s.substring(iPos,iPos+1);
    		if(OneStr[str1] !== undefined){
    			num += OneStr[str1];
    			iPos += 1;
    		}
    	}
    }
    return num;
};

console.log(romanToInt('III'));