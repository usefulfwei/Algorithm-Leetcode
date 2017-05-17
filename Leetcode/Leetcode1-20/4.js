/*There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
 

Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 

https://leetcode.com/problems/median-of-two-sorted-arrays/

这个题目其实并不难，但我在上面stuck了很长时间。这题的本质是写一个寻找Kth元素的函数，
要点就是比较两个数组中第Kth/2元素的大小（如果数组太小，就用infinity补足），然后用递归调用。
1     halflen    halflen+1    len

1        halflen   len
*/

var findMedianSortedArrays = function (nums1, nums2) {
    var len = nums1.length + nums2.length;
    var halfLen;
    if (len % 2 === 0) { //even
        halfLen = len / 2;
        return (findKth(nums1, 0, nums2, 0, halfLen) +
            findKth(nums1, 0, nums2, 0, halfLen + 1)) / 2;
    }
    else {
        halfLen = (len + 1) / 2;
        return findKth(nums1, 0, nums2, 0, halfLen);
    }
};

//find the Kth element from the 2 sorted arrays
function findKth(nums1, iStart, nums2, jStart, k) {
    //nothing left in nums1
    if (iStart >= nums1.length) return nums2[jStart + k - 1];
    //nothing left in nums2
    if (jStart >= nums2.length) return nums1[iStart + k - 1];
    //find the first element
    if (k == 1) {
        return Math.min(nums1[iStart], nums2[jStart]);
    }
    var halfK = Math.floor(k / 2);
    var iIndex = iStart + halfK - 1;
    var jIndex = jStart + halfK - 1;
    var v1 = iIndex < nums1.length ? nums1[iIndex] : Infinity;
    var v2 = jIndex < nums2.length ? nums2[jIndex] : Infinity;
    if (v1 >= v2) return findKth(nums1, iStart, nums2, jStart + halfK, k - halfK);
    else return findKth(nums1, iStart + halfK, nums2, jStart, k - halfK);
}

var nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
var nums2 = [0, 6];
console.log(findKth(nums1,0,nums2,0,8));
console.log(findKth(nums1,0,nums2,0,7));
/*console.log(findMedianSortedArrays(nums1, nums2));
*/
/*var nums1 = [1,2,3];
var nums2 = [3,4];
var nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
var nums2 = [0, 6];

console.log(findMedianSortedArrays(nums1, nums2));*/