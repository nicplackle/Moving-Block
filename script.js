document.getElementById("gamepiece");
var canvas = document.getElementById("canvas");
var myGamePieceLeft = 0;

function mov(e) {
  if (e.keyCode == 37) {
    myGamePieceLeft -= 2;
    gamepiece.style.left = myGamePieceLeft + "px";
    if (myGamePieceLeft <= 0) {
      myGamePieceLeft += 2;
    }
  }
  if (e.keyCode == 39) {
    myGamePieceLeft += 2;
    gamepiece.style.left = myGamePieceLeft + "px";
    if (myGamePieceLeft >= 550) {
      myGamePieceLeft -= 2;
    }
  }
  if (e.keyCode == 40) {
    myGamePieceLeft += 2;
    gamepiece.style.top = myGamePieceLeft + "px";
    if (myGamePieceLeft >= 550) {
      myGamePieceLeft -= 2;
    }
  }
  if (e.keyCode == 38) {
    myGamePieceLeft -= 2;
    gamepiece.style.top = myGamePieceLeft + "px";
    if (myGamePieceLeft <= 0) {
      myGamePieceLeft += 2;
    }
  }
}

document.onkeydown = mov;
