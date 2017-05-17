var findMedianSortedArrays = function (nums1, nums2) {
    var arr = [];
    arr = arr.concat(nums1);
    arr = arr.concat(nums2);
    arr = pop(arr);
    if(arr.length % 2 === 0){
        return (arr[arr.length/2]+arr[arr.length/2-1])/2;
    }else {
        return arr[Math.ceil(arr.length/2)];
    }
};

function pop(arr){
    var len = arr.length;
    for(var i=0;i<len;i++){
        for(var j=i+1;j<len;j++){
            if(arr[i]>=arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
//but in n2
var nums1 = [1,2,3,4,5,2];
var nums2 = [3,4];

/*var nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
var nums2 = [0, 6];*/

console.log(findMedianSortedArrays(nums1, nums2));