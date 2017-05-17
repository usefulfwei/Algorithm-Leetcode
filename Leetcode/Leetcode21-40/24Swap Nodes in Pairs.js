/*LeetCode第24题：Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

 

https://leetcode.com/problems/swap-nodes-in-pairs/

这个题的解题思路也比较清晰，只是在换pair的过程中，要小心链表的重新链接，每一次都涉及4个元素，pair前面那个元素，我把它叫nodePrev, pair第一个，我把它叫nodeFirst,
 pair第二个，我把它叫nodeSecond，还有一个pair后面那个元素，我把它叫nodeNext。*/
// nodePrev nodeFirst nodeSecond nodeNext
var swapPairs = function (head) {
    var nodePrev = null;
    var nodeNext = null;
    var nodeFirst = head;
    if (nodeFirst === null) return null;
    var nodeSecond = nodeFirst.next;
    if (nodeSecond === null) return head;
    var nodeHead = null;
    while (nodeFirst !== null) {
        nodeSecond = nodeFirst.next;
        if (nodeSecond === null) break;
        nodeNext = nodeSecond.next;
        nodeFirst.next = nodeNext;
        nodeSecond.next = nodeFirst;
        if (nodeHead === null) nodeHead = nodeSecond;
        if (nodePrev !== null) nodePrev.next = nodeSecond;
        nodePrev = nodeFirst;
        nodeFirst = nodeNext;
    }
    return nodeHead;
};

 var swapPairs = function(head){
 	var nodePrev = null;
 	var nodeNext = null;
 	var nodeFirst = head;
 	if(nodeFirst === null) return null;
 	var nodeSecond = nodeFirst.next;
 	if(nodeSecond == null) return head;
 	var nodeHead = null;
 	while(nodeFirst != null){
 		nodeSecond = nodeFirst.next;
 		if(nodeSecond === null) break;
 		nodeNext = nodeSecond.next;
 		nodeFirst.next = nodeNext;
 		nodeSecond.next = nodeFirst;
 		if(nodeHead == null) nodeHead = nodeSecond;
 		if(nodePrev !== null) nodePrev.next = nodeSecond;
 		nodePrev = nodeFirst;
 		nodeFirst = nodeNext;
 	}
 	return nodeHead;
 }