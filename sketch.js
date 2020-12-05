var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var car1Img, car2Img, car3Img, car4Img, trackImg;


function preload(){
  car1Img = loadImage("images/car1.jpg");
  car2Img = loadImage("images/car2.jpg");
  car3Img = loadImage("images/car3.jpg");
  car4Img = loadImage("images/car4.jpg");
  trackImg = loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    //console.log("INSIDE IF");
    game.end();
  }
}
