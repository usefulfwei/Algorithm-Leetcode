/*Merge k Sorted Lists

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

https://leetcode.com/problems/merge-k-sorted-lists/

这个题其实并不难，因为很容易找到解题思路。我的解题思路如下，先把K个链头做成一个sorted list(由于JavaScript的array就是sorted list，所以在JavaScript就做成array了），然后把sorted list中第一个元素放进merge的链接中，然后把sorted list第一个元素拿掉（JavaScript中是shift函数拿掉第一个元素），把那个拿掉的元素（实际上是个链接）的next（如果为空，当然就不要插入了）插入到那个sorted list中（用二分法快速找到位置，结果依然是个sorted list），然后继续拿出那个sorted list中的第一个元素，直到整个sorted list为空。

整个复杂度是O（logK*(n1+n2+n3+...nk))吧。*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 function ListNode(val) {
      this.val = val;
      this.next = null;
 }
 var result = [];
 for(var i=0;i<3;i++){
 	var array = [];
 	for(var j=0;j<10;j++){
 		array[j] = ((Math.floor(Math.random()*10*j)));
 	}
 	result.push(array)
 }
 console.log(result);
 console.log(mergeKLists(result))

  function mergeKLists(lists) {
    var len = lists.length;
    var array = [];
    for (var i = 0; i < len; i++) {
        if (lists[i] !== null)
            array.push(lists[i]);
    }
    array.sort((x, y) => x.val - y.val);
    var result = null;
    var nodeCur = null;
    while (array.length > 0) {
        var node = array[0];
        if (result === null) {
            result = node;
        }
        else {
            nodeCur.next = node;
        }
        nodeCur = node;

        array.shift(); //remove the merge node first
        if (node.next !== null) {
            //put the node in the sorted array
            if (array.length > 0) {
                iPos = findPos(array, 0, array.length - 1, node.next);
                array.splice(iPos, 0, node.next);
            }
            else {
                array.push(node.next);
            }
        }
    }
    return result;
};

//use binary search to find the proper index 
function findPos(array, start, end, node) {
    if (start == end) {
        if (start === 0) {
            if (node.val < array[start].val) return 0;
            else return 1;
        }
        else {
            if (node.val < array[end].val) return end;
            else return end + 1;
        }
    }
    else {
        var mid = Math.floor((start + end) / 2);
        if (node.val < array[mid].val) return findPos(array, start, mid, node);
        else return findPos(array, mid + 1, end, node);
    }
}


/*var mergeLists = function(lists){
	var len = lists.length;
	var array = [];
	for(var i=0;i<len;i++){
		if(lists[i] !== null){
			array.push(lists[i])
		}
	}
	array.sort((x,y) => x.val - y.val);
	var result = null;
	var nodeCur = null;
	while(array.length > 0){
		var node = array[0];
		if(result == null){
			result = node;
		}else{
			nodeCur.next = node;
		}
		nodeCur = node;

		array.shift();
		if(node.next !== null){
			if(array.length > 0){
				iPos = findPos(array,0,array.length-1,node.next)
				array.splice(iPos,0,node.next);
			}else{
				array.push(node.next);
			}
		}
	}
	return result;
}


 function findPos(array,start,end,node){
 	if(start == end){
 		if(start === 0){
 			if(node.val < array[start].val) return 0;
 			else return 1;
 		}
 		else{
 			if(node.val < array[end].val) return end;
 			else return end+1 ;
 		}
 	}else{
 		var mid = Math.floor((start+end)/2);
 		if(node.val< array[mid].val) return findPos(array,start,mid,node);
 		else return findPos(array,mid,end,node);
 	}
 }*/