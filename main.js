const square = document.getElementById("square");
const container = document.getElementById("container");
const food = document.createElement("div");

document.getElementById("body").addEventListener("load", createFood());
document.onkeydown = animate;
document.getElementById("resetBtn").addEventListener("click", resetGame);

let squareLeft = 0;
let squareTop = 0;
let counter = 0;

let progressBar = document.getElementById("progressbar");
let progressWidth = 0;
let progressTime = 0;

let currentHighscore = counter;
document.getElementById("currentHighscore").innerHTML = currentHighscore;
let newHighscore = "";

function animate(e) {
  if (e.keyCode === 39) {
    squareLeft += 50;
    if (squareLeft >= 650) {
      squareLeft = 650;
    }
  }

  if (e.keyCode === 37) {
    squareLeft -= 50;
    if (squareLeft < 0) {
      squareLeft = 0;
    }
  }

  if (e.keyCode === 40) {
    squareTop += 50;
    if (squareTop > 400) {
      squareTop = 400;
    }
  }

  if (e.keyCode === 38) {
    squareTop -= 50;
    if (squareTop < 0) {
      squareTop = 0;
    }
  }
  square.style.left = squareLeft + "px";
  square.style.top = squareTop + "px";
  detectCollision();
}

function detectCollision() {
  if (squareLeft === randomX && squareTop === randomY) {
    deleteFood();
    keepCount();
    createFood();
    countDown();
    resetTime();
  }
}

function countDown() {
  if (progressWidth >= 100 && counter < 27) {
    document.getElementById("loss").style.display = "block";
    document.getElementById("square").style.display = "none";
    document.getElementById("food").style.display = "none";
    document.getElementById("counter").style.display = "none";
    document.getElementById("progressbar").style.display = "none";
    document.getElementById("resetBtn").style.display = "block";
    document.getElementById("counter").innerHTML = 0;
  } else if (progressWidth >= 100 && counter === 0) {
    clearInterval(progressTime);
    progressWidth = 0;
  } else if (progressWidth >= 100 && counter >= 27) {
    clearInterval(progressTime);
    progressWidth = 0;
  } else {
    progressWidth++;
    progressBar.style.width = progressWidth + "%";
  }
}

function resetTime() {
  clearInterval(progressTime);
  progressWidth = 0;
  progressTime = setInterval(countDown, 80);
}

function createFood() {
  food.id = "food";

  randomX = Math.floor(Math.random() * 13 + 1) * 50;
  randomY = Math.floor(Math.random() * 7 + 2) * 50;

  food.style.left = randomX + "px";
  food.style.top = randomY + "px";

  container.appendChild(food);
}

function deleteFood() {
  food.parentNode.removeChild(food);
}

function keepCount() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
  scaleDifficulty();
  countHighscore();

  function countHighscore() {
    if (currentHighscore > newHighscore);
    newHighscore = currentHighscore;
    document.getElementById("currentHighscore").innerHTML = newHighscore;
  }

  function scaleDifficulty() {
    if (counter >= 100) {
      resetTime();
      document.getElementById("intro").style.display = "none";
      document.getElementById("progressbar").style.display = "block";
      document.getElementById("counter").style.display = "block";
    }
  }
}

function resetGame() {
  document.getElementById("body").addEventListener("load", createFood());
  document.getElementById("intro").style.display = "block";
  document.getElementById("victory").style.display = "none";
  document.getElementById("loss").style.display = "none";
  document.getElementById("resetBtn").style.display = "none";

  document.getElementById("square").style.display = "block";

  document.getElementById("food").style.display = "block";

  document.getElementById("counter").style.display = "none";
  document.getElementById("counter").style.color = "#04d99d";

  document.getElementById("progressbar").style.display = "none";
  document.onkeydown = animate;
  counter = 0;
  clearInterval(progressTime);
  progressWidth = 0;
}
