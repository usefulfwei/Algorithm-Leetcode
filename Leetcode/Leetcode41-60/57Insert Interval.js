/**
 * Created by jwdn on 2017/5/5.
 *
 Given a set of non-overlapping intervals,
 insert a new interval into the intervals (merge if necessary).

 You may assume that the intervals were initially sorted according to
 their start times.

 Example 1:
 Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

 Example 2:
 Given [1,2],[3,5],[6,7],[8,10],[12,16],
 insert and merge [4,9] in as [1,2],[3,10],[12,16].

 This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
 */
function Interval(start,end){
  this.start = start;
  this.end = end;
}

var insert = function (intervals,newInterval) {
  var len = intervals.length;
  if(len == 0) return [newInterval];
  //[iStart,iLoc];

  /*
   第一个值是result里区间的index，第二个值是num相对于这个区间的位置，
   -1表示区间左，0表示区间内，1表示区间右。
  * */
  var resL = search(0,len-1, newInterval.start);
  var resR = search(resL[0],len-1, newInterval.end);

  if(resL[0] === resR[0] && resL[1] === 0 && resR[1] === 0) return intervals;
  // inter the interval

  var newLeft = resL[1] === 0 ? intervals[resL[0]].start : newInterval.start;

  var newRight = resR[1] === 0 ? intervals[resR[0]].end : newInterval.end;

  var start = resL[0] + (resL[1] > 0 ?  1 : 0);
  var numDelete = resR[0] - resL[0];
  if(resR[1] >= 0 && resL[1] <= 0) numDelete++;
  intervals.splice(start,numDelete,new Interval(newLeft,newRight));
  return intervals;



  function search(iStart,iEnd,num){
    var interval,iLoc,iHalf;
    if(iStart == iEnd){
      interval = intervals[iStart];
      iLoc = locate(interval,num);
      return [iStart,iLoc];
    }

    iHalf = Math.floor((iStart+iEnd)/2);

    interval = intervals[iHalf];

    iLoc = locate(interval,num);

    if(iLoc === 0) return [iHalf,iLoc];
    else if(iLoc < 0) return search(iStart,iHalf,num);
    else return search(iHalf+1,iEnd,num);

  }


  function locate(interval,num) {
    if(num < interval.start) return -1;
    else if(num > interval.end) return 1;
    return 0;
  }
}
