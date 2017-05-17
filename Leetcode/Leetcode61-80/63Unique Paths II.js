/**
 Follow up for "Unique Paths":

 Now consider if some obstacles are added to the grids. How many unique paths
 would there be?

 An obstacle and empty space is marked as 1 and 0 respectively in the grid.

 There is one obstacle in the middle of a 3x3 grid as illustrated below.

 [ [0,0,0],
 [0,1,0],
 [0,0,0] ]
 The total number of unique paths is 2.

 Note: m and n will be at most 100.

 这题是前面第62题的加强版，本质上还是通项公式，

 s[i j] = s[i-1, j] + s[i, j-1]

 只不过在遇到格子[i,j]的时候直接赋0（此路不通）就可以了。
 注意，i=0和j=0的时候要小心处理，必须赋前一个或者上一个的值。
 */



