/*Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.

https://leetcode.com/problems/container-with-most-water/

这个题我想了很长时间也没想出来，没奈何只好在网上看了看别人的解题思路，原来是从左右两边像跷跷板一样地向中间移动。如果没做过这个题，在面试中遇到，我估计会挂。*/

var maxArea = function(height){
	var len = height.length;
	var iL = 0;
	var iR = len-1;
	var max= 0;
	do{
		var hL = height[iL];
		var hR = height[iR];
		var a = area(iL,hL,iR,hR);
		if(a>max) max = a;
		if(hL<hR){
			while(hL<hR && iL<iR){
				iL += 1;
				hL = height[iL];
				a = area(iL,hL,iR,hR);
				if(a>max) max = a;
			}
		}else{
			while(hL >= hR && iL < iR){
				iR -= 1;
				hR = height[iR];
				a = area(iL,hL,iR,hR);
				if(a > max) max = a;
			}
		}
	}while(iL<iR)
	return max;
}

function area(iL,hL,iR,hR){
	return (iR-iL)*Math.min(hL,hR)
}