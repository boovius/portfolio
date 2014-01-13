console.log('movement load successful');


/* ////////////////////  */

/* VARIABLE DECLARATIONS */

/* ////////////////////  */


/* piece variables */
var pieceID = 1;
function block(top, left, moving, pieceID) {this.top = top; this.left = left; this.moving = moving; this.pieceID = pieceID;};
var pieces = []; /* array of blocks with pieces */

/* gameboard tracker vars */
var rowCounter = 0; /* row counter */
var colCounter = 0; /* column counter */

var clearRow = false; /* becomes true if a row fills */

/* killRow() vars */
var blockID; /* unique block id generated from jquery div grab for killRow() */
var newTop; /* shifting blocks down in killRow function */

var i, j; /* reusable for loop counters */



/* ////////////////////  */

/* FUNCTION DEFINITIONS */

/* ////////////////////  */



/* Game Board Tracker */		
gameBoardTracker = function(fallingBlock){
 	for (rowCounter=0; rowCounter<10; rowCounter++){
 			if (rows[rowCounter][colCounter].top === fallingBlock.top){
 				for (colCounter=0; colCounter<10; colCounter++){
 					if (rows[rowCounter][colCounter].left === fallingBlock.left){
 						break;	
 					};
 				};
 				break;
 			};
 		};
 }

checkRowFull = function(){
	for (colCounter=0; colCounter<10; colCounter++){
		if (rows[rowCounter-1][colCounter].hit === true)
			clearRow = true;
		else {
			clearRow = false;
			break;	
		}; 
	};	
};
				

killRow = function (){
	
	/* Removes Filled Rows */
	for (i=0; i<10; i++){
		blockID = '#pieceID_' + rows[rowCounter-1][i].pieceID;
		$(blockID).remove();
	}; 	

	/* Drops all remaining pieces */
	for (i=0; i<pieces.length; i++){
		blockID = '#pieceID_' + pieces[i].pieceID;
		newTop = $(blockID).css('top');
		newTop = parseInt(newTop);
		newTop = newTop + 50;
		$(blockID).animate({top: newTop}, {duration: 1, queue: false});
	}; 	
	
	/* updates the gameboard */
	for (i=8; i>0; i--){
		for (j=0; j<10; j++){
			rows[i][j].hit = rows[i-1][j].hit;
			rows[i][j].pieceID = rows[i-1][j].pieceID;
		};
	};		
		
 };	



/* ////////////////////  */

/* EXECUTION */

/* ////////////////////  */



$(function(){
	$(window).keydown(function(data){
		/*var fallingBlock = {'top': 0, 'left': 0, 'moving': true, 'pieceID': pieceID};*/
		var fallingBlock = new block(0, 0, true, pieceID); 
		
		/* Attaining Current Falling Block Position Properties */

		fallingBlock.top = $('.fallingBlock').css("top");
		fallingBlock.top = parseInt(fallingBlock.top);

		fallingBlock.left = $('.fallingBlock').css("left");
		fallingBlock.left = parseInt(fallingBlock.left);


		/* MOVEMENT CONTROL - */

		if (rows[rowCounter][colCounter].hit === false){
			
			/* - DOWN */
				if(data.keyCode === 40){
					fallingBlock.top = fallingBlock.top + 50;
					$('.fallingBlock').animate({top: fallingBlock.top}, {duration: 1, queue: false});
					
				};
			
			/* - LEFT */
				if(data.keyCode === 37){
					if (fallingBlock.left !== 0)
						fallingBlock.left = fallingBlock.left - 50;
					$('.fallingBlock').animate({left: fallingBlock.left}, {duration: 1, queue: false});
				};

			/* - RIGHT */
				if(data.keyCode === 39){
					if (fallingBlock.left !== 450)
						fallingBlock.left = fallingBlock.left + 50;
					$('.fallingBlock').animate({left: fallingBlock.left}, {duration: 1, queue: false});
				};

			/* - DELETE ROW EXP */
				if(data.keyCode === 68){
					killRow();
				};
			
				/* Tracks fallingBlock Current Position and Prints to Console */			
				if (fallingBlock.top >= 0){
					gameBoardTracker(fallingBlock);	/* tells us where block is on board */
					console.log(rows[rowCounter][colCounter]); /* prints this position out */	
				};	
				
			}
			else 
			{
				/* sets collision on gameboard board spot to top of fallingBlock */
				rows[rowCounter-1][colCounter].hit = true;
				rows[rowCounter-1][colCounter].pieceID = pieceID;
				console.log(rows[rowCounter-1][colCounter]);

				/* change fallingBlock properties */
				fallingBlock.moving = false;
				$('.block').removeClass('fallingBlock').addClass('hitBlock');

				/* fills the pieces array with fallingBlock objects*/
				pieces.push(fallingBlock);
				
				/* checks if entire row is full */
				checkRowFull();
				
				/* if entire row full row clears and points awarded */
				if (clearRow){
					killRow();
				};
				
				/* adds new block */
				pieceID++;	
				$('#container').append("<div id='pieceID_" + pieceID + "' class='box block fallingBlock'></div>");
				
				/* resets gameboard tracker counters */
				rowCounter = 0;
				colCounter = 0;


			};
		
		
	});
				
	











	
});