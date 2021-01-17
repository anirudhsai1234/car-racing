var canvas,database;

var gameState=0
var database;
var playerCount;
var form;
var game;
var player;
function setup(){
  database = firebase.database();
  console.log(database);
 canvas= createCanvas(500,500);
game=new Game()
game.getState()
game.start()
 
}

function draw(){
  background("white");
  
   
  
}

