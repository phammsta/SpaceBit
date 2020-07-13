let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);

let bgReady, heroReady, monsterReady, monster2Ready, monster3Ready, monster4Ready, monster5Ready, monster6Ready, monster7Ready, monster8Ready, monster9Ready;
let bgImage, heroImage, monsterImage, monster2Image, monster3Image, monster4Image, monster5Image, monster6Image, monster7Image, monster8Image, monster9Image;


let startTime = Date.now();
const SECONDS_PER_ROUND = 30;
let elapsedTime = 0;
let score = 0
let gameOver = true

//sounds
let music = new Audio();
music.src = "sounds/interstellar.mp3"
let pickup = new Audio();
pickup.src = "sounds/pickup.mp3"


function loadImages() {
  bgImage = new Image();
  bgImage.onload = function () {
    // show the background image
    bgReady = true;
  };
  bgImage.src = "images/spacebackground.png";
  heroImage = new Image();
  heroImage.onload = function () {
    // show the hero image
    heroReady = true;
  };
  heroImage.src = "images/spaceman.png";

  monsterImage = new Image();
  monsterImage.onload = function () {
    // show the monster image
    monsterReady = true;
  };
  monsterImage.src = "images/cash.png";

  monster2Image = new Image();
  monster2Image.onload = function () {
    // show the monster image
    monster2Ready = true;
  };
  monster2Image.src = "images/predator.png";

  monster3Image = new Image();
  monster3Image.onload = function () {
    // show the monster image
    monster3Ready = true;
  };
  monster3Image.src = "images/predator.png";

  monster4Image = new Image();
  monster4Image.onload = function () {
    // show the monster image
    monster4Ready = true;
  };
  monster4Image.src = "images/predator.png";

  monster5Image = new Image();
  monster5Image.onload = function () {
    // show the monster image
    monster5Ready = true;
  };
  monster5Image.src = "images/predator.png";

  monster6Image = new Image();
  monster6Image.onload = function () {
    // show the monster image
    monster6Ready = true;
  };
  monster6Image.src = "images/predator.png";

  monster7Image = new Image();
  monster7Image.onload = function () {
    // show the monster image
    monster7Ready = true;
  };
  monster7Image.src = "images/predator.png";

  monster8Image = new Image();
  monster8Image.onload = function () {
    // show the monster image
    monster8Ready = true;
  };
  monster8Image.src = "images/predator.png";

  monster9Image = new Image();
  monster9Image.onload = function () {
    // show the monster image
    monster9Ready = true;
  };
  monster9Image.src = "images/predator.png";

  gameOver = false
}


let heroX = canvas.width / 2;
let heroY = canvas.height / 2;

let monsterX = 100;
let monsterY = 100;
let monster2X = 200
let monster2Y = 200
let monster3X = 312
let monster3Y = 42
let monster4X = 58
let monster4Y = 249
let monster5X = 405
let monster5Y = 9
let monster6X = 500
let monster6Y = 500
let monster7X = 200
let monster7Y = 500
let monster8X = 200
let monster8Y = 500
let monster9X = 100
let monster9Y = 250


let keysDown = {};
function setupKeyboardListeners() {
  // Check for keys pressed where key represents the keycode captured
  // For now, do not worry too much about what's happening here. 
  addEventListener("keydown", function (key) {
    keysDown[key.keyCode] = true;
  }, false);

  addEventListener("keyup", function (key) {
    delete keysDown[key.keyCode];
  }, false);
}

let movement = 3
let direction = ["up", "down", "left", "monstermovement"]



let update = function () {
  if(gameOver === true){
    return;
  }

  elapsedTime = Math.floor((Date.now() - startTime) / 1000);
if ((SECONDS_PER_ROUND - elapsedTime) <= 0) {
    gameOver = true
    return;
  }

  music.play()

  if (direction[movement] === "up") {
    monster2Y -= 20
  }
  if (direction[movement] === "down") {
    monster2Y += 20
  }
  if (direction[movement] === "left") {
    monster2X -= 20
  }
  if (direction[movement] === "monstermovement") {
    monster2X += 3
    monster3X -= 3
    monster4X += 3
    monster5Y += 3
    monster6X -= 3
    monster7X += 3
    monster8Y -= 3
    monster9Y += 3
  }

  

  //hero touches monsters = lose
  if (
    heroX <= (monster2X + 25)
    && monster2X <= (heroX + 25)
    && heroY <= (monster2Y + 25)
    && monster2Y <= (heroY + 25)
  ) {
    document.getElementById("gameover").innerHTML = `GAME OVER!`
    pickup.play()
    gameOver = true;
  }
  if (
    heroX <= (monster3X + 25)
    && monster3X <= (heroX + 25)
    && heroY <= (monster3Y + 25)
    && monster3Y <= (heroY + 25)
  ) {
    gameOver = true;
    pickup.play()
    document.getElementById("gameover").innerHTML = `GAME OVER!`
  }
  if (
    heroX <= (monster4X + 25)
    && monster4X <= (heroX + 25)
    && heroY <= (monster4Y + 25)
    && monster4Y <= (heroY + 25)
  ) {
    gameOver = true;
    pickup.play()
    document.getElementById("gameover").innerHTML = `GAME OVER!`  }
  if (
    heroX <= (monster5X + 25)
    && monster5X <= (heroX + 25)
    && heroY <= (monster5Y + 25)
    && monster5Y <= (heroY + 25)
  ) {
    gameOver = true;
    pickup.play()
    document.getElementById("gameover").innerHTML = `GAME OVER!`  }
  if (
    heroX <= (monster6X + 25)
    && monster6X <= (heroX + 25)
    && heroY <= (monster6Y + 25)
    && monster6Y <= (heroY + 25)
  ) {
    gameOver = true;
    pickup.play()
    document.getElementById("gameover").innerHTML = `GAME OVER!`  }
  if (
    heroX <= (monster7X + 25)
    && monster7X <= (heroX + 25)
    && heroY <= (monster7Y + 25)
    && monster7Y <= (heroY + 25)
  ) {
    gameOver = true;
    pickup.play()
    document.getElementById("gameover").innerHTML = `GAME OVER!`  }
  if (
    heroX <= (monster8X + 25)
    && monster8X <= (heroX + 25)
    && heroY <= (monster8Y + 25)
    && monster8Y <= (heroY + 25)
  ) {
    gameOver = true;
    pickup.play()
    document.getElementById("gameover").innerHTML = `GAME OVER!`  }
  if (
    heroX <= (monster9X + 25)
    && monster9X <= (heroX + 25)
    && heroY <= (monster9Y + 25)
    && monster9Y <= (heroY + 25)
  ) {
    gameOver = true;
    pickup.play()
    document.getElementById("gameover").innerHTML = `GAME OVER!`  }


  if (38 in keysDown) { // Player is holding up key
    heroY -= 4;
  }
  if (40 in keysDown) { // Player is holding down key
    heroY += 4;
  }
  if (37 in keysDown) { // Player is holding left key
    heroX -= 4;
  }
  if (39 in keysDown) { // Player is holding right key
    heroX += 4;
  }
  //  monsterX += 5

  // Check if player and monster collided. Our images
  // are about 32 pixels big.
  if (
    heroX <= (monsterX + 25)
    && monsterX <= (heroX + 25)
    && heroY <= (monsterY + 25)
    && monsterY <= (heroY + 25)
  ) {
    // Pick a new location for the monster.
    // Note: Change this to place the monster at a new, random location.
    monsterX = Math.random() * canvas.width;
    monsterY = Math.random() * canvas.height;
    score++;
    
  }



  //keep hero in canvas
  if (heroX >= canvas.width - 16) {
    heroX = 0
  }
  if (heroX < 0) {
    heroX = canvas.width - 16
  }

  if (heroY >= canvas.height - 16) {
    heroY = 0
  }
  if (heroY < 0) {
    heroY = canvas.height - 16
  }

  //
  if (monster2X >= canvas.width - 32) {
    monster2X = 0
  }
  if (monster2X < 0) {
    monster2X = canvas.width - 32
  }

  if (monster2Y >= canvas.height - 32) {
    monster2Y = 0
  }
  if (monster2Y < 0) {
    monster2Y = canvas.height - 32
  }

  if (monster3X >= canvas.width - 32) {
    monster3X = 0
  }
  if (monster3X < 0) {
    monster3X = canvas.width - 32
  }

  if (monster4X >= canvas.width - 32) {
    monster4X = 0
  }
  if (monster4X < 0) {
    monster4X = canvas.width - 32
  }
  if (monster5Y >= canvas.height - 32) {
    monster5Y = 0
  }
  if (monster5Y < 0) {
    monster5Y = canvas.height - 32
  }
  if (monster6X >= canvas.width - 32) {
    monster6X = 0
  }
  if (monster6X < 0) {
    monster6X = canvas.width - 32
  }
  if (monster7X >= canvas.width - 32) {
    monster7X = 0
  }
  if (monster7X < 0) {
    monster7X = canvas.width - 32
  }
  if (monster8Y >= canvas.width - 32) {
    monster8Y = 0
  }
  if (monster8Y < 0) {
    monster8Y = canvas.width - 32
  }
  if (monster9Y >= canvas.width - 32) {
    monster9Y = 0
  }
  if (monster9Y < 0) {
    monster9Y = canvas.width - 32
  }

};


var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if (heroReady) {
    ctx.drawImage(heroImage, heroX, heroY);
  }
  if (monsterReady) {
    ctx.drawImage(monsterImage, monsterX, monsterY);
  }
  if (monster2Ready) {
    ctx.drawImage(monster2Image, monster2X, monster2Y);
  }
  if (monster3Ready) {
    ctx.drawImage(monster3Image, monster3X, monster3Y);
  }
  if (monster4Ready) {
    ctx.drawImage(monster4Image, monster4X, monster4Y);
  }
  if (monster5Ready) {
    ctx.drawImage(monster5Image, monster5X, monster5Y);
  }
  if (monster6Ready) {
    ctx.drawImage(monster6Image, monster6X, monster6Y);
  }
  if (monster7Ready) {
    ctx.drawImage(monster7Image, monster7X, monster7Y);
  }
  if (monster8Ready) {
    ctx.drawImage(monster8Image, monster8X, monster8Y);
  }
  if (monster8Ready) {
    ctx.drawImage(monster8Image, monster8X, monster8Y);
  }
  if (monster9Ready) {
    ctx.drawImage(monster9Image, monster9X, monster9Y);
  }
  if (monster9Ready) {
    ctx.drawImage(monster9Image, monster9X, monster9Y);
  }
 

  document.getElementById("timeElapsed").innerHTML = `Seconds Remaining: ${SECONDS_PER_ROUND - elapsedTime}`
  document.getElementById("score").innerHTML = `Score: ${score}`


};

function resetGame() {
  heroX = canvas.width / 2;
  heroY = canvas.height / 2;
  monsterX = Math.random() * canvas.width
  monsterY = Math.random() * canvas.height
  monster2X = 200
  monster2Y = 200
  monster3X = 312
  monster3Y = 42
  monster4X = 58
  monster4Y = 249
  monster5X = 405
  monster5Y = 9
  monster6X = 500
  monster6Y = 500
  monster7X = 200
  monster7Y = 500
  monster8X = 200
  monster8Y = 500
  monster9X = 100
  monster9Y = 250
 
  startTime = Date.now()
  gameOver = false
  score = 0
  
  document.getElementById("gameover").innerHTML = ` `  
}


function stuck(){

}


var main = function () {
  update();
  render();
  requestAnimationFrame(main);
};





var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


function startGame() {
  setupKeyboardListeners();
  loadImages();
  main();
  document.getElementById("startGame").style.visibility = "hidden"
}


