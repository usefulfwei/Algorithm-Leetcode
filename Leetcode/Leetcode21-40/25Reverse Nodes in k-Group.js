/*LeetCode第25题：Reverse Nodes in k-Group

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5 

https://leetcode.com/problems/reverse-nodes-in-k-group/

这个题目是24题的加强版，难点在于Only constant memory is allowed. 否则的话，直接把链表转化成array，求逆不要太简单。
现在限制了内存，那就只有反复扫描链表了。在这种情形下，基本上只有用递归了。其实只要想到递归和分半求逆，问题就解决了一半。
剩下的，就是繁琐的编程细节了，主要是在各段的首尾要保持链接， 还有就是group求完逆以后，group前后也需要保持正确的链接。*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 var reverseKGroup = function (head, k) {
    if (k == 1) return head;
    var groupPrev = null;
    var groupNext = null;
    var groupFirst = null;
    var groupEnd = null;
    var nodeCur = head;
    var newHead = null;
    while (nodeCur !== null) {
        var icount = 1;
        groupFirst = nodeCur;
        while (icount < k && nodeCur !== null) {
            nodeCur = nodeCur.next;
            icount++;
        }
        if (nodeCur === null) { //end reached
            if (newHead === null) newHead = head; //if newHead unassigned, then use the old head
            break;
        }
        groupEnd = nodeCur;
        nodeCur = groupEnd.next;
        groupNext = groupEnd.next;
        reverseGroup(groupFirst, groupEnd, k);

        if (newHead === null) newHead = groupEnd; //groupEnd is the head
        if (groupPrev !== null) {
            groupPrev.next = groupEnd;
        }
        groupPrev = groupFirst;
        groupFirst.next = groupNext;
    }
    return newHead;
};

function reverseGroup(groupFirst, groupEnd, k) {
    if (k == 1) return;
    if (k == 2) {
        groupEnd.next = groupFirst;
        return;
    }
    var halfK = Math.floor(k / 2);

    var nodeCur = groupFirst;
    var icount = 1;
    while (icount < halfK) {
        nodeCur = nodeCur.next;
        icount++;
    }
    var groupLEnd = nodeCur;
    var groupRFirst = nodeCur.next;
    reverseGroup(groupFirst, groupLEnd, halfK);
    reverseGroup(groupRFirst, groupEnd, k - halfK);
    groupRFirst.next = groupLEnd;
};