/*falling block experimentation*/

var pieces = [
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3],
	[0,1,2,3]
];

/* s*/
				pieces[z][k] = fallingBlock;
				if (k === 3){
					z++;
					k = 0;
				}
				else{
					k++;
				}

var newTop;
	for (i=0; i<=piecesCounter; i++){
		for (j=0; j<=blockCounter; j++){
			if ($'.fallingBlock').css('top') === pieces[i][j].top){
				newTop = pieces[i][j].top + 50;
				$('.fallingBlock').animate({top: newTop}, {duration: 1, queue: false});
			};
		};
	};