/*具体解题思路就是先写一个isValid(i,j)的判断函数，
判断Cell(i,j)是否有效（只需要判断当前行，当前列，和当前小方块），
然后写一个solve(i,j)的递归函数，这个函数的意义是假设Cell(i,j)前面的值都已经给定，
那么现在究竟有没有解，没有就是return false，有的话，就return true 
（并且在cell里没值的话，可以给丫赋上一个正确的值）。那怎么知道有没有解？
这就是递推的妙用。这里是从小往大的逆递推，也就是卯吃寅粮，
非常像西方人那种透支的方法。
因为到了最后一个cell，只需要用IsVaid看看这个cell有没有效就可以了。*/


var solveSudoku = function(board){
	var result = solve(0,0);

	function solve(i,j){
		if(i==9) return true; //reach board

		var j2 = j+1;
		var i2 = i;
		if(j2 == 9) {
			j2 = 0;
			i2++;
		}
		if(board[i][j]!='.'){
			if(solve(i2,j2)) return true;
		}else{
			for(var k=1;k<=9;k++){
				board[i][j] = k.toString();
				if(isValid(i,j) && solve(i2,j2)) return true;
			}
			board[i][j] = '.';
		}
	}

	function isValid(i,j){
		var num = board[i][j];
		for(var k=0;k<=9;k++){
			if(k!= j && board[i][k] == num){
				return false;
			}
			if(k!=i && board[k][j]== num){
				return false;
			}
			//row && col
		}
		var i0 = Math.floor(i/3);
		var i1 = i%3;

		var j0 = Math.floor(j/3);
		var j1 = j%3;

		for(var i2=0;i2<3;i2++){
			for(var j2=0;j2<3;j2++){
				if(i1 != i2 && j1 != j2 && board[i0*3+i2][j0*3+j2]==num){
					return false;
				}
			}
		}
		return true;
	}
}