/**
 * Created by jwdn on 2017/5/5.
 Given a list, rotate the list to the right by k places, where k is non-negative.

 For example:
 Given 1->2->3->4->5->NULL and k = 2,

 return 4->5->1->2->3->NULL

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}

 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var rotateRight = function (head,k) {

  if(head === null) return null;
  var node = head;
  var len = 1;
  while(node.next !== null){
    len++;
    node = node.next;
  }

  if(len == 1) return head;
  k %= len;
  if(k === 0) return head;
  var tail = node;

  node = head;
  var i=0;
  while(i < len - k -1){
    i++;
    node = node.next;
  }

  var first = node.next;
  node.next = null;
  tail.next = head;
  return first;

};

// var rotateRight = function(head, k) {
//   if (head === null) return null;
//   var node = head;
//   var len = 1;
//   while (node.next !== null) {
//     len++;
//     node = node.next;
//   }
//   if(len == 1) return head;
//   k %= len;
//   if (k === 0) return head;
//   var tail = node;
//
//   node = head;
//   var i = 0;
//   while (i < len - k -1) {
//     i++;
//     node = node.next;
//   }
//   var first = node.next;
//   node.next = null;
//   tail.next = head;
//   return first;
// };

