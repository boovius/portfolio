
console.log('gameboard load successful');


var rows = [
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	]; 


/* ROW 0 - FLOOR */


rows[0][0] = {'top': 0, 'left': 0,     'hit': false, 'pieceID': 0};      /*console.log(rows[0][0]);*/
rows[0][1] = {'top': 0, 'left': 25,    'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/
rows[0][2] = {'top': 0, 'left': 50,    'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/
rows[0][3] = {'top': 0, 'left': 75,    'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/
rows[0][4] = {'top': 0, 'left': 100,   'hit': false, 'pieceID': 0};    /*console.log(rows[0][2]);*/
rows[0][5] = {'top': 0, 'left': 125,   'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/
rows[0][6] = {'top': 0, 'left': 150,   'hit': false, 'pieceID': 0};    /*console.log(rows[0][2]);*/
rows[0][7] = {'top': 0, 'left': 175,   'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/
rows[0][8] = {'top': 0, 'left': 200,   'hit': false, 'pieceID': 0};    /*console.log(rows[0][4]);*/
rows[0][9] = {'top': 0, 'left': 225,   'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/
rows[0][10]= {'top': 0, 'left': 250,   'hit': false, 'pieceID': 0};    /*console.log(rows[0][5]);*/
rows[0][11]= {'top': 0, 'left': 275,   'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/
rows[0][12]= {'top': 0, 'left': 300,   'hit': false, 'pieceID': 0};    /*console.log(rows[0][6]);*/
rows[0][13]= {'top': 0, 'left': 325,   'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/
rows[0][14]= {'top': 0, 'left': 350,   'hit': false, 'pieceID': 0};    /*console.log(rows[0][7]);*/
rows[0][15]= {'top': 0, 'left': 375,   'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/
rows[0][16]= {'top': 0, 'left': 400,   'hit': false, 'pieceID': 0};    /*console.log(rows[0][8]);*/
rows[0][17]= {'top': 0, 'left': 425,   'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/
rows[0][18]= {'top': 0, 'left': 450,   'hit': false, 'pieceID': 0};    /*console.log(rows[0][9]);*/
rows[0][19]= {'top': 0, 'left': 475,   'hit': false, 'pieceID': 0};     /*console.log(rows[0][1]);*/

/* ROW 1 */
rows[1][0]= {'top': 50, 'left': 0,    'hit': false, 'pieceID': 0};    /*console.log(rows[1][0]);*/
rows[1][1]= {'top': 50, 'left': 50,   'hit': false, 'pieceID': 0};   /*console.log(rows[1][1]);*/
rows[1][2]= {'top': 50, 'left': 100,  'hit': false, 'pieceID': 0};  /*console.log(rows[1][2]);*/
rows[1][3]= {'top': 50, 'left': 150,  'hit': false, 'pieceID': 0};  /*console.log(rows[1][2]);*/
rows[1][4]= {'top': 50, 'left': 200,  'hit': false, 'pieceID': 0};  /*console.log(rows[1][4]);*/
rows[1][5]= {'top': 50, 'left': 250,  'hit': false, 'pieceID': 0};  /*console.log(rows[1][5]);*/
rows[1][6]= {'top': 50, 'left': 300,  'hit': false, 'pieceID': 0};  /*console.log(rows[1][6]);*/
rows[1][7]= {'top': 50, 'left': 350,  'hit': false, 'pieceID': 0};  /*console.log(rows[1][7]);*/
rows[1][8]= {'top': 50, 'left': 400,  'hit': false, 'pieceID': 0};  /*console.log(rows[1][8]);*/
rows[1][9]= {'top': 50, 'left': 450,  'hit': false, 'pieceID': 0};  /*console.log(rows[1][9]);*/

/* ROW 2 */
rows[2][0]= {'top': 100, 'left': 0,   'hit': false, 'pieceID': 0};   /*console.log(rows[2][0]);*/
rows[2][1]= {'top': 100, 'left': 50,  'hit': false, 'pieceID': 0};  /*console.log(rows[2][1]);*/
rows[2][2]= {'top': 100, 'left': 100, 'hit': false, 'pieceID': 0}; /*console.log(rows[2][2]);*/
rows[2][3]= {'top': 100, 'left': 150, 'hit': false, 'pieceID': 0}; /*console.log(rows[2][2]);*/
rows[2][4]= {'top': 100, 'left': 200, 'hit': false, 'pieceID': 0}; /*console.log(rows[2][4]);*/
rows[2][5]= {'top': 100, 'left': 250, 'hit': false, 'pieceID': 0}; /*console.log(rows[2][5]);*/
rows[2][6]= {'top': 100, 'left': 300, 'hit': false, 'pieceID': 0}; /*console.log(rows[2][6]);*/
rows[2][7]= {'top': 100, 'left': 350, 'hit': false, 'pieceID': 0}; /*console.log(rows[2][7]);*/
rows[2][8]= {'top': 100, 'left': 400, 'hit': false, 'pieceID': 0}; /*console.log(rows[2][8]);*/
rows[2][9]= {'top': 100, 'left': 450, 'hit': false, 'pieceID': 0}; /*console.log(rows[2][9]);*/

/* ROW 3 */
rows[3][0]= {'top': 150, 'left': 0,   'hit': false, 'pieceID': 0};   /*console.log(rows[3][0]);*/
rows[3][1]= {'top': 150, 'left': 50,  'hit': false, 'pieceID': 0};  /*console.log(rows[3][1]);*/
rows[3][2]= {'top': 150, 'left': 100, 'hit': false, 'pieceID': 0}; /*console.log(rows[3][2]);*/
rows[3][3]= {'top': 150, 'left': 150, 'hit': false, 'pieceID': 0}; /*console.log(rows[3][2]);*/
rows[3][4]= {'top': 150, 'left': 200, 'hit': false, 'pieceID': 0}; /*console.log(rows[3][4]);*/
rows[3][5]= {'top': 150, 'left': 250, 'hit': false, 'pieceID': 0}; /*console.log(rows[3][5]);*/
rows[3][6]= {'top': 150, 'left': 300, 'hit': false, 'pieceID': 0}; /*console.log(rows[3][6]);*/
rows[3][7]= {'top': 150, 'left': 350, 'hit': false, 'pieceID': 0}; /*console.log(rows[3][7]);*/
rows[3][8]= {'top': 150, 'left': 400, 'hit': false, 'pieceID': 0}; /*console.log(rows[3][8]);*/
rows[3][9]= {'top': 150, 'left': 450, 'hit': false, 'pieceID': 0}; /*console.log(rows[3][9]);*/

/* ROW 4 */
rows[4][0]= {'top': 200, 'left': 0,   'hit': false, 'pieceID': 0};   /*console.log(rows[4][0]);*/
rows[4][1]= {'top': 200, 'left': 50,  'hit': false, 'pieceID': 0};  /*console.log(rows[4][1]);*/
rows[4][2]= {'top': 200, 'left': 100, 'hit': false, 'pieceID': 0}; /*console.log(rows[4][2]);*/
rows[4][3]= {'top': 200, 'left': 150, 'hit': false, 'pieceID': 0}; /*console.log(rows[4][2]);*/
rows[4][4]= {'top': 200, 'left': 200, 'hit': false, 'pieceID': 0}; /*console.log(rows[4][4]);*/
rows[4][5]= {'top': 200, 'left': 250, 'hit': false, 'pieceID': 0}; /*console.log(rows[4][5]);*/
rows[4][6]= {'top': 200, 'left': 300, 'hit': false, 'pieceID': 0}; /*console.log(rows[4][6]);*/
rows[4][7]= {'top': 200, 'left': 350, 'hit': false, 'pieceID': 0}; /*console.log(rows[4][7]);*/
rows[4][8]= {'top': 200, 'left': 400, 'hit': false, 'pieceID': 0}; /*console.log(rows[4][8]);*/
rows[4][9]= {'top': 200, 'left': 450, 'hit': false, 'pieceID': 0}; /*console.log(rows[4][9]);*/

/* ROW 5 */
rows[5][0]= {'top': 250, 'left': 0,   'hit': false, 'pieceID': 0};   /*console.log(rows[5][0]);*/
rows[5][1]= {'top': 250, 'left': 50,  'hit': false, 'pieceID': 0};  /*console.log(rows[5][1]);*/
rows[5][2]= {'top': 250, 'left': 100, 'hit': false, 'pieceID': 0}; /*console.log(rows[5][2]);*/
rows[5][3]= {'top': 250, 'left': 150, 'hit': false, 'pieceID': 0}; /*console.log(rows[5][2]);*/
rows[5][4]= {'top': 250, 'left': 200, 'hit': false, 'pieceID': 0}; /*console.log(rows[5][4]);*/
rows[5][5]= {'top': 250, 'left': 250, 'hit': false, 'pieceID': 0}; /*console.log(rows[5][5]);*/
rows[5][6]= {'top': 250, 'left': 300, 'hit': false, 'pieceID': 0}; /*console.log(rows[5][6]);*/
rows[5][7]= {'top': 250, 'left': 350, 'hit': false, 'pieceID': 0}; /*console.log(rows[5][7]);*/
rows[5][8]= {'top': 250, 'left': 400, 'hit': false, 'pieceID': 0}; /*console.log(rows[5][8]);*/
rows[5][9]= {'top': 250, 'left': 450, 'hit': false, 'pieceID': 0}; /*console.log(rows[5][9]);*/

/* ROW 6 */
rows[6][0]= {'top': 300, 'left': 0,   'hit': false, 'pieceID': 0};   /*console.log(rows[6][0]);*/
rows[6][1]= {'top': 300, 'left': 50,  'hit': false, 'pieceID': 0};  /*console.log(rows[6][1]);*/
rows[6][2]= {'top': 300, 'left': 100, 'hit': false, 'pieceID': 0}; /*console.log(rows[6][2]);*/
rows[6][3]= {'top': 300, 'left': 150, 'hit': false, 'pieceID': 0}; /*console.log(rows[6][2]);*/
rows[6][4]= {'top': 300, 'left': 200, 'hit': false, 'pieceID': 0}; /*console.log(rows[6][4]);*/
rows[6][5]= {'top': 300, 'left': 250, 'hit': false, 'pieceID': 0}; /*console.log(rows[6][5]);*/
rows[6][6]= {'top': 300, 'left': 300, 'hit': false, 'pieceID': 0}; /*console.log(rows[6][6]);*/
rows[6][7]= {'top': 300, 'left': 350, 'hit': false, 'pieceID': 0}; /*console.log(rows[6][7]);*/
rows[6][8]= {'top': 300, 'left': 400, 'hit': false, 'pieceID': 0}; /*console.log(rows[6][8]);*/
rows[6][9]= {'top': 300, 'left': 450, 'hit': false, 'pieceID': 0}; /*console.log(rows[6][9]);*/

/* ROW 7 */
rows[7][0]= {'top': 350, 'left': 0,   'hit': false, 'pieceID': 0};   /*console.log(rows[7][0]);*/
rows[7][1]= {'top': 350, 'left': 50,  'hit': false, 'pieceID': 0};  /*console.log(rows[7][1]);*/
rows[7][2]= {'top': 350, 'left': 100, 'hit': false, 'pieceID': 0}; /*console.log(rows[7][2]);*/
rows[7][3]= {'top': 350, 'left': 150, 'hit': false, 'pieceID': 0}; /*console.log(rows[7][2]);*/
rows[7][4]= {'top': 350, 'left': 200, 'hit': false, 'pieceID': 0}; /*console.log(rows[7][4]);*/
rows[7][5]= {'top': 350, 'left': 250, 'hit': false, 'pieceID': 0}; /*console.log(rows[7][5]);*/
rows[7][6]= {'top': 350, 'left': 300, 'hit': false, 'pieceID': 0}; /*console.log(rows[7][6]);*/
rows[7][7]= {'top': 350, 'left': 350, 'hit': false, 'pieceID': 0}; /*console.log(rows[7][7]);*/
rows[7][8]= {'top': 350, 'left': 400, 'hit': false, 'pieceID': 0}; /*console.log(rows[7][8]);*/
rows[7][9]= {'top': 350, 'left': 450, 'hit': false, 'pieceID': 0}; /*console.log(rows[7][9]);*/

/* ROW 8 */
rows[8][0]= {'top': 400, 'left': 0,   'hit': false, 'pieceID': 0};   /*console.log(rows[8][0]);*/
rows[8][1]= {'top': 400, 'left': 50,  'hit': false, 'pieceID': 0};  /*console.log(rows[8][1]);*/
rows[8][2]= {'top': 400, 'left': 100, 'hit': false, 'pieceID': 0}; /*console.log(rows[8][2]);*/
rows[8][3]= {'top': 400, 'left': 150, 'hit': false, 'pieceID': 0}; /*console.log(rows[8][2]);*/
rows[8][4]= {'top': 400, 'left': 200, 'hit': false, 'pieceID': 0}; /*console.log(rows[8][4]);*/
rows[8][5]= {'top': 400, 'left': 250, 'hit': false, 'pieceID': 0}; /*console.log(rows[8][5]);*/
rows[8][6]= {'top': 400, 'left': 300, 'hit': false, 'pieceID': 0}; /*console.log(rows[8][6]);*/
rows[8][7]= {'top': 400, 'left': 350, 'hit': false, 'pieceID': 0}; /*console.log(rows[8][7]);*/
rows[8][8]= {'top': 400, 'left': 400, 'hit': false, 'pieceID': 0}; /*console.log(rows[8][8]);*/
rows[8][9]= {'top': 400, 'left': 450, 'hit': false, 'pieceID': 0}; /*console.log(rows[8][9]);*/

/* ROW 9 */
rows[9][0]= {'top': 450, 'left': 0,   'hit': true,  'pieceID': 0};   /*console.log(rows[9][0]);*/
rows[9][1]= {'top': 450, 'left': 50,  'hit': true,  'pieceID': 0};  /*console.log(rows[9][1]);*/
rows[9][2]= {'top': 450, 'left': 100, 'hit': true,  'pieceID': 0}; /*console.log(rows[9][2]);*/
rows[9][3]= {'top': 450, 'left': 150, 'hit': true,  'pieceID': 0}; /*console.log(rows[9][2]);*/
rows[9][4]= {'top': 450, 'left': 200, 'hit': true,  'pieceID': 0}; /*console.log(rows[9][4]);*/
rows[9][5]= {'top': 450, 'left': 250, 'hit': true,  'pieceID': 0}; /*console.log(rows[9][5]);*/
rows[9][6]= {'top': 450, 'left': 300, 'hit': true,  'pieceID': 0}; /*console.log(rows[9][6]);*/
rows[9][7]= {'top': 450, 'left': 350, 'hit': true,  'pieceID': 0}; /*console.log(rows[9][7]);*/
rows[9][8]= {'top': 450, 'left': 400, 'hit': true,  'pieceID': 0}; /*console.log(rows[9][8]);*/
rows[9][9]= {'top': 450, 'left': 450, 'hit': true,  'pieceID': 0}; /*console.log(rows[9][9]);*/

