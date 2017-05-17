/*Remove Nth Node From End of List

Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.

 

单项链接一般没有什么花哨可言。我不知道这里的one pass是指一次通过测试，
还是链接只能循环一次。
考虑到后一种情形的话，我就以空间换时间，把链接转化成数组，然后删数组容易多了。*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 var removeNthFromEnd = function(head,n){
 	var array = [];
 	var nodeCur = head;
 	while(nodeCur !== null){
 		array.push(nodeCur)
 		nodeCur = nodeCur.next
 	}
 	var len = array.length;
 	var node = array[len-n]
 	var nodePrev = n < len ? array[len-n-1] : null;
 	var nodeNext = n == 1? null : array[len-n+1]
 	if(nodePrev === null) return nodeNext
 	else{
 		nodePrev.next = nodeNext;
 		return head;
 	} 
 }