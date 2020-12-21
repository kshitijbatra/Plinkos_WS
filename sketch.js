const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,division;
var gameState=1;
var PLAY=1;
var END=0;
var d1,d2,d3,d4,d5,d6,d7;
var particles=[];
var plinkos=[];
var score=0;
var particle;
var turn=0;

function setup() {
  createCanvas(480,800);

  engine=Engine.create();
  world=engine.world;

  ground = new Ground(240,790,480,20);
  //ground = new Ground(240,400,10,10);
  d1 = new Division(0,625,10,300);
  d2 = new Division(80,625,10,300);
  d3 = new Division(160,625,10,300);
  d4 = new Division(240,625,10,300);
  d5 = new Division(320,625,10,300);
  d6 = new Division(400,625,10,300);
  d7 = new Division(480,625,10,300);
}

function draw() {
  background("black"); 
  Engine.update(engine); 

  textSize(24);
  text("SCORE: ",score,50,30);

  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();

  for(var j=40;j<=width;j=j+40){
    plinkos.push(new Plinko(j,75));
}
  for(var j=15;j<=width-10;j=j+40){
    plinkos.push(new Plinko(j,175));
}

for(var j=30;j<=width;j=j+40){
  plinkos.push(new Plinko(j,275));
}
for(var j=20;j<=width-10;j=j+40){
  plinkos.push(new Plinko(j,375));
}

if(frameCount%20===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10));
}


plinkos.forEach(displayPlinko);

particles.forEach(displayParticles);

  drawSprites();
}



function displayPlinko(item){
  item.display();
}

function displayParticles(item){
  item.display();
}

function mousePressed(){
  if(gameState!==END){
    count++
    particle = new Particle(mouseX,10,10,10);
  }
}