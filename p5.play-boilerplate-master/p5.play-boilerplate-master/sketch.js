const Engine= Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var world,engine;
var player,coins;
var playerImg,coinsImg;
 
 
 // playerImg.image=loadImage("images/my player.png");
  //coinsImg.image=loadImage("images/coin.png");
 
 
 function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine=Engine.create();
  world=engine.World;
  var rno=Math.round(random(100,750))
  player=new Player(200,10,30,50);
  coins=new Coins(rno,100,20);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  player.display();
  coins.display();
  drawSprites();
}