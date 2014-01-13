/*function block() {top = 0; left = 0; moving = true; pieceID = 1;};*/
function block(top, left, moving, pieceID) {this.top = top; this.left = left; this.moving = moving; this.pieceID = pieceID;};
var fallingBlock = new block(0, 0, true, 3); 
console.log(fallingBlock);
