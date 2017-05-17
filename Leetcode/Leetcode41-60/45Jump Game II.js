/**
 * Created by jwdn on 2017/5/1.

其中三个变量step, reachByStep和reach的意义分别如下，reach最简单，
就是在扫描到i位的时候，最远能到多远。而reachByStep是指step步能到达的最远距离。
显而易见，当i超出reachByStep的时候，需要给step加步（否则step步就到达不了i），
这个时候也需要更新reachByStep为reach, 因为新的步最远能到的距离就是reach。
 */

var jump = function(nums){

  var len = nums.length;

  var step = 0;
  var reachByStep = 0;
  var reach = 0;

  for(var i=0;i<len;i++){
    if(i>reachByStep){
      reachByStep = reach;
      step++
    }

    var newReach = i+nums[i];
    if(newReach > reach) reach = newReach;
  }
  return step;
}