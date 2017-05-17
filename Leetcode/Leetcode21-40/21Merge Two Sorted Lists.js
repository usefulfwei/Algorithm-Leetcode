/*Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

https://leetcode.com/problems/merge-two-sorted-lists/

拼接两个链接从物理上看非常直观，不过在编程过程中需要注意链头的设置。*/

var mergeTowLists = function(l1,l2){
	if(l1 === null) return l2;
	if(l2 === null) return l1;

	var lHead = null;
	var lCur = null;
	while(l1 !== null || l2 !=== null){
		if(l1 === null){
			lCur = splice(lCur,l2)
			return lHead || lCur;
		}
		else if(l2 === null){
			lCur = splice(lCur,l1)
			return lHead || lCur;
		}else{
			if(l1.val < l2.val){
				if(lCur === null){
					lHead = l1;
					lCur = lHead;
				}else{
					lCur.next = l1;
					lCur = l1;
				}
				l1 = l1.next
			}else{
				if(lCur === null){
					lHead = l2;
					lCur = lHead;
				}else{
					lCUr.next = l2;
					lCur = l2;
				}
				l2 = l2.next;
			}
		}
	}
	return lHead;
};

function splice(lMerged,l){
	if(lMerged === null) return l;
	else{
		lMerged.next = l;
		return lMerged;
	}
}