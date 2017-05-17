/**
 * Created by jwdn on 2017/5/1.

Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
    bool isMatch(const char *s, const char *p)

Some examples:
    isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false

 */

// var isMatch = function(s,p){
//   if(p == '*') return true;
//
//   var lens = s.length;
//   var lenp = p.length;
//   var is = 0;
//   var ip = 0;
//   var iMatch = null;
//   var iStar = null;
//
//   while(is < lens){
//     if(s.charAt(is) == p.charAt(ip) || p.charAt(ip) == '?') {
//       is++;
//       ip++;
//     }
//     else if(p.charAt(ip) == '*'){
//       iMatch = is;
//       iStar = ip;
//       ip++;
//     }
//
//     else if(iMatch !== null){
//       iMatch++;
//       is = iMatch;
//       ip = iStar+1;
//     }else {
//       return false;
//     }
//
//   }
//   while(ip < lenp){
//     if(p.charAt(ip) != '*') return false;
//     ip++;
//   }
//   return true;
// }


var isMatch = function(s, p) {
  if(p =='*') return true;
  var lens = s.length;
  var lenp = p.length;
  var is = 0;
  var ip = 0;
  var iMatch = null;
  var iStar = null;
  while(is < lens){
    if(s.charAt(is) == p.charAt(ip) || p.charAt(ip) == '?'){
      is++;
      ip++;
    }
    else if(p.charAt(ip) == '*'){
      iMatch = is;
      iStar = ip;
      ip++;
    }
    else if(iMatch !== null){
      iMatch++;
      is = iMatch;
      ip = iStar + 1;
    }
    else {
      return false;
    }
  }
  while(ip<lenp){
    if(p.charAt(ip) != '*') return false;
    ip++;
  }
  return true;
};
