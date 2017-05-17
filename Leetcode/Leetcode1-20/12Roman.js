/*Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.

https://leetcode.com/problems/integer-to-roman/

这个题主要是要弄清楚罗马数字的书写规则，我是看了一下维基百科，

https://zh.wikipedia.org/wiki/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97

然后把个位，十位，百位和千位直接用数组列出来。*/

var intToRoman = function (num) {
    FirstDigits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    SecondDigits = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    ThirdDigits = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    FourthDigits = ['', 'M', 'MM', 'MMM'];
    var array = ['', '', '', ''];
    var i4 = Math.floor(num / 1000);
    if (i4 > 0) array[0] = FourthDigits[i4];
    num = num % 1000;
    var i3 = Math.floor(num / 100);
    if (i3 > 0) array[1] = ThirdDigits[i3];
    num = num % 100;
    var i2 = Math.floor(num / 10);
    if (i2 > 0) array[2] = SecondDigits[i2];
    num = num % 10;
    if (num > 0) array[3] = FirstDigits[num];
    return array.join('');
};