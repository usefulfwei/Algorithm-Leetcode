/**
 * Created by jwdn on 2017/5/5.
 Given a string s consists of upper/lower-case alphabets
 and empty space characters ' ', return the length of last word in the string.

 If the last word does not exist, return 0.

 Note: A word is defined as a character sequence consists of non-space characters only.

 For example,
 Given s = "Hello World",
 return 5.
 */

var lengthLast= function (strs) {
  var arr = strs.split(" ");
  var len =  arr.length;
  return arr[len-1].length;
}

var lengthOfLastWord = function (s) {
  var len = s.length;
  if(len === 0) return 0;
  var iEnd = len - 1;
  while (iEnd >= 0 && s.charAt(iEnd) == " ") iEnd--; //avoid ending with blank
  if(iEnd > 0 ) return 0; // all are blank
  var iStart = iEnd;
  while(iStart >= 0 && s.charAt(iStart) != ' ') iStart--;
  return iEnd - iStart;
}
