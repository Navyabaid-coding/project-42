var hr,min,sec;
var hrangle,minAngle,secAngle;


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
  
}

function draw() {
  background(0,0,0); 
  translate(200,200);
  rotate(-90)

 // calculating time by predefined function in p5.js
  hr= hour();
  min=minute();
  sec=second();
  // create interative rotation= continuous rotation
  secAngle=map(sec,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  // drawing the second hand
  push();
  rotate(secAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  // drawing the minute hand
  push();
  rotate(minAngle);
  stroke(239,123,118);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

   // drawing the hour hand
   push();
   rotate(hrAngle);
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,40,0);
   pop();
   
   stroke(255,0,0);
   point(0,0);
   // drawing the arc
   strokeWeight(10);
   noFill();
   // seconds
   stroke(0,0,255);
   arc(0,0,300,300,0,secAngle);
   // minutes
   stroke(239,123,118);
   arc(0,0,280,280,0,minAngle);
   //hr
   stroke(0,255,0);
   arc(0,0,260,260,0,hrAngle);

 


  
}