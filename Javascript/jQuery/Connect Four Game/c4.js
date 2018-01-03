var player1 = prompt("Player1: enter your name. You are blue")
var player1Color = 'rgb(86,151,255)';

var player2 = prompt("Player2: enter your name. You are red")
var player2Color = 'rgb(237,45,73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum,colNum){
	console.log("You won starting at this row,col:");
	console.log(rowNum);
	console.log(colNum);
}

function changeColor(rowIndex,colindex,color){
	return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function returnColor(rowIndex,colIndex){
	return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}


function checkBottom(colIndex){
	var colorReport = returnColor(5,colIndex)
	for (row = 5; row > -1; row--){
		colorReport = returnColor(row,colIndex);
		if(colorReport ===  'rgb(128,128,128)'){
			return row;
		}
	}
}

function colorMatchCheck(one,two,three,four){
	return (one === two && one === three && one === four && colorReport !== 'rgb(128,128,128)' && one !== undefined);
}

function horizontalWinCheck() {
	for (var row = 0; row <6; row++){
		for (var col = 0; col < 4, col++){
			if(colorMatchCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2,returnColor(row,col+3)))){
				content.log("horizontal win!")
				reportWin(row,col);
				return true;
			}else {
				continue;
			}
		}
	}
}

function verticalWinCheck() {
	for(var col = 0; col < 6; col++){
		for (var row = 0, row < 4; row++){
			if(colorMatchCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))) {
				console.log('vertical win');
				reportWin(row,col)
				return true;
			}
		}else {
			continue;
		}
	}
}

// Check for Diagonal Wins
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}


//Start with p1
  var currentPlayer = 1;
  var currentName = player1;
  var currentColor = player1Color;

  $('h3').text("player one. Du bist dran! Pick a column to drop in")

  $('.board button').on('click',function(){
  		var col = $(this).closest('td').index();
  		var bottomAvail = checkBottom(col)
  })




