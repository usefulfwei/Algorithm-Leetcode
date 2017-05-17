/*You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

https://leetcode.com/problems/add-two-numbers/*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
      this.val = val;
      this.next = null;
  }

var addTwoNumbers = function(l1,l2) {
	var sum = l1.val+l2.val;
	var lFirst = new ListNode(sum%10);
	var carry = sum >= 10 ? 1 : 0;
	var lPrev = lFirst;
	l1 = l1.next;
	l2 = l2.next;
	while(l1 !==  null || l2 !== null){
		var v1 = l1 === null ? 0 : l1.val;
		var v2 = l2 === null ? 0 : l2.val;
		sum = v1 + v2 + carry;
		var l = new ListNode(sum%10);
		carry = sum >= 10 ? 1 : 0;
		lPrev.next = l;
		console.log(lPrev);
		lPrev = l;
		console.log(lPrev+'      secondTime');
		console.log(lFirst+'First!!!!!!!!');
		if(l1 !== null) l1 = l1.next;
		if(l2 !== null) l2 = l2.next;
	}
	if(carry > 0){
		l = new ListNode(1);
		lPrev.next = 1;
	}
	console.log(lFirst+'        result!!')
	return lFirst;
};

var a1 = new ListNode(2);
var a2 = new ListNode(4);
var a3 = new ListNode(3);
a1.next = a2;
a2.next = a3;

var b1 = new ListNode(5);
var b2 = new ListNode(6);
var b3 = new ListNode(4);
b1.next = b2;
b2.next = b3;

var s = addTwoNumbers(a1, b1);
console.log(s);

/*
这个题主要是考单向链接的基本知识。
单向链接实际上很简单，只能从头（head）走到尾。
用JavaScript写code的时候，我一开始是用 != 来跟null做比较，
结果被warning了，
要求用 !== 做比较，晕。我回头去看看 !=和 !== 究竟有什么本质的区别，
*/