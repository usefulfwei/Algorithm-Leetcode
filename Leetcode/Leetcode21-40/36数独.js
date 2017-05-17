/*就是检查9行，9列和9个小方块，看看有没有重复的数字而已。*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board){
	var size = board.length;
	if(!checkHorizental()) return false;
	if(!checkVertical()) return false;
	return checkSquares();

	function checkHorizental(){
		for(var i=0;i<size;i++){
			var arr = [];
			for(var j=0;j<size;j++){
				if(board[i][j] !== ''){
					var num = Number(board[i][j]);
					if(isNaN(num)) continue;
					//isNaN 不是数字 true 是数字false
					if(num <1 || num > 9) return false;
					if(arr.indexOf(num)>=0) return false;
					arr.push(num);
				}
			}
		}
		return true;
	}

	function checkVertical(){
		for(var i=0;i<size;i++){
			var arr = [];
			for(var j=0;j<size;j++){
				if(board[j][i] !== ''){
					var num = Number(board[j][i]);
					if(isNaN(num)) continue;
					//isNaN 不是数字 true 是数字false
					if(num <1 || num > 9) return false;
					if(arr.indexOf(num)>=0) return false;
					arr.push(num);
				}
			}
		}
		return true;
	}

	function checkSquares(){
		for(var i=0;i<size;i+=3){
			for(var j=0;j<size;j+=3){
				var arr = [];
				for(var k=0;k<3;k++){
					for(var l=0;l<3;l++){
						if(board[i+k][j+l]!==''){
							var num = board[i+k][j+l];
							if(isNaN(num)) continue;
							if(num < 1 || num > 9) return false;
							if(arr.indexOf(num)>=0) return false;
							arr.push(num);
						}
					}
				}

			}
		}
		return true;
	}
}