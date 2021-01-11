function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

}

function draw() {
  background(0);
 
  translate(200,200)
  rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(9);
  stroke("magenta");
  noFill();
  var scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  
  stroke("lime");
  var mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);
  
  stroke("aqua");
  var hrAngle = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);
  

  push();
  rotate(scAngle);
  stroke("magenta");
  line(0,0,100,0);
  pop();
  
  push();
  rotate(mnAngle);
  stroke("lime");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke("aqua");
  line(0,0,60,0);
  pop();
  
  stroke("red");
  point (0,0);
}