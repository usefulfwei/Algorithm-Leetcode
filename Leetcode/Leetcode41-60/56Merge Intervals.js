/**
 * Created by jwdn on 2017/5/2.
 Given a collection of intervals,
 merge all overlapping intervals.

 For example,
 Given [1,3],[2,6],[8,10],[15,18],
 return [1,6],[8,10],[15,18].

 这个题其实并不难，是繁琐，因为算法很容易找到。具体也就是一个一个扫描，
 在result中找到起始相连的interval和结束相连的interval，然后把新的interval插进去，同时把该删的interval全部删掉。

 其中insert函数处理一个一个要merge的数组，函数search则是给定一个数，从result的[iStart, iEnd]里找到num的定位，
 结果返回一个二元值，第一个值是result里区间的index，第二个值是num相对于这个区间的位置，-1表示区间左，0表示区间内，1表示区间右。

 locate函数很简单，就是定位num在某个区间的位置，-1表示区间左，0表示区间内，1表示区间右。

 最tricky的地方是删的时候，从哪儿开始删，删多少个区间，我用start来表示删或者添加的位置，

 start = resL[0] + (resL[1] > 0 ? 1 : 0);

 这个表达式比较容易理解，resL[0]表示找到的最左边的区间位置，
 resL[1]表示新区间起始值在这个区间的相对位置，
 如果大于0的话，这个区间不能删，所以进一。

 要删多是最tricky，

 var numDelete = resR[0] - resL[0];
 if (resR[1]>=0 && resL[1]<=0) numDelete++;

 第一行比较容易理解，第二行可能要费点时间琢磨清楚
 （反正就9种case，左边-1，0，1，右边-1，0，1）。

 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 *
 *
 这个题其实并不难，是繁琐，因为算法很容易找到。具体也就是一个一个扫描，
 在result中找到起始相连的interval和结束相连的interval，然后把新的interval插进去，
 同时把该删的interval全部删掉。

 其中insert函数处理一个一个要merge的数组，函数search则是给定一个数，从result的[iStart, iEnd]里找到num的定位，
 结果返回一个二元值，第一个值是result里区间的index，第二个值是num相对于这个区间的位置，
 -1表示区间左，0表示区间内，1表示区间右。

 locate函数很简单，就是定位num在某个区间的位置，-1表示区间左，0表示区间内，1表示区间右。

 最tricky的地方是删的时候，从哪儿开始删，删多少个区间，我用start来表示删或者添加的位置，

 start = resL[0] + (resL[1] > 0 ? 1 : 0);

 这个表达式比较容易理解，resL[0]表示找到的最左边的区间位置，
 resL[1]表示新区间起始值在这个区间的相对位置，如果大于0的话，这个区间不能删，所以进一。

 要删多是最tricky，

 var numDelete = resR[0] - resL[0];
 if (resR[1]>=0 && resL[1]<=0) numDelete++;

 第一行比较容易理解，第二行可能要费点时间琢磨清楚（反正就9种case，左边-1，0，1，右边-1，0，1）。
 */


var merge = function (intervals) {
  var len = intervals.length;
  if(len === 0) return intervals;
  var result = [intervals[0]];
  for(var i=1;i<len;i++){
    insert(intervals[i]);
  }
  return result;

  function insert(newInterval) {
    var resL = search(0, result.length - 1, newInterval.start);

    var resR = search(resL[0], result.length - 1, newInterval.end);

    if (resL[0] === resR[0] && resL[1] === 0 && resR[1] === 0) return;

    var newLeft = resL[1] === 0 ? result[resL[0]].start : newInterval.start;

    var newRight = resR[1] === 0 ? result[resR[0]].end : newInterval.end;

    var start = resL[0] + (resL[1] > 0 ? 1 : 0);

    var numDelete = resR[0] - resL[0];

    if (resR[1]>=0 && resL[1]<=0) numDelete++;

    result.splice(start, numDelete, new Interval(newLeft, newRight));

  }

  function search(iStart,iEnd,num){
    var interval,iLoc,iHalf;
    if(iStart == iEnd){
      interval = result[iStart];
      iLoc = locate(interval,num);
      return [iStart,iLoc];
    }

    iHalf = Math.floor((iStart+iEnd)/2);
    interval = result[iHalf];

    iLoc = locate(interval,num);

    if(iLoc == 0) return [iHalf,iLoc];
    //ideal result

    else if(iLoc<0) return search(iStart,iHalf,num);
    else return search(iHalf+1,iEnd,num);

  }

  function locate(interval,num){
    if(num < interval.start) return -1;
    else if(num > interval.end) return 1;
    else return 0;
    // num in interval
  }
}