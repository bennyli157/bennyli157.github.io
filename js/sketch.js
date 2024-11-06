let c;

function setup() {
  c = createCanvas(1000, 1000);
  draw(); // Call draw initially to draw the illustration
}

function mouseClicked() {
  draw(); // Call draw whenever the canvas is clicked
}


function draw(head, neck, armleft, armright, suit, button, button2, suitflapr, suitflapl, pocket, shirtback, tietop, tiebottom, shirtright, shirtleft ) {
  // put drawing code here
  background(222,0,0);

beginShape(neck);
strokeWeight(2.5);
stroke(255);
fill(0,0,0);
    
  vertex(360,0);
  vertex(355,150); 
  vertex(645,150);
  vertex(640,0);

endShape(CLOSE);

beginShape(head);
strokeWeight(2.5);
stroke(255);
fill(0,0,0);
    
circle(500,-105,400)
endShape(CLOSE);

beginShape(armleft);
strokeWeight(2.5);
stroke(255);
fill(0,0,0);
    
  vertex(50,200);
  vertex(0,400);
  vertex(0,1000);
  vertex(150,600);

  endShape(CLOSE);

beginShape(armright);
strokeWeight(2.5);
stroke(255);
fill(0,0,0);
    
  vertex(950,200);
  vertex(1000,600);
  vertex(1000,1000);
  vertex(850,600);


  endShape(CLOSE);

beginShape(suit);
strokeWeight(2.5);
stroke(255);
fill(0,0,0);
    
  vertex(650,100);
  vertex(750,150);
  vertex(950,200);
  vertex(850,1000);
  vertex(150,1000);
  vertex(50,200);
  vertex(250,150);
  vertex(350,100);
  vertex(500,200);

  endShape(CLOSE);
  
beginShape(button);
strokeWeight(2.5);
stroke(255);
fill(0,0,0);
    
circle(500,700,40)
endShape(CLOSE);

beginShape(button2);
strokeWeight(2.5);
stroke(255);
fill(0,0,0);
    
circle(500,850,40)
endShape(CLOSE);

beginShape(suitflapr);
strokeWeight(2.5);
stroke(255);
fill(0,0,0);
    
vertex(600,150);
vertex(650,100);
vertex(700,125);
vertex(725,200);
vertex(675,225);
vertex(725,250);
vertex(500,600);

endShape(CLOSE);

beginShape(suitflapl);
strokeWeight(2.5);
stroke(255);
fill(0,0,0);

vertex(500,600);
vertex(450,675);
vertex(450,1000);
vertex(450,675);

endShape(CLOSE);

beginShape(suitflapl);
strokeWeight(2.5);
stroke(255);
fill(0,0,0);

vertex(400,150);
vertex(350,100);
vertex(300,125);
vertex(275,200);
vertex(325,225);
vertex(275,250);
vertex(497,597);

endShape(CLOSE);

beginShape(pocket);
strokeWeight(2.5);
stroke(255);
fill(222,0,0);
    
  vertex(700,350);
  vertex(825,350);
  vertex(825,335);
  vertex(700,335);

  endShape(CLOSE);

beginShape(shirtback);
strokeWeight(2.5);
stroke(0);
fill(255,255,255);
      
  vertex(615,150);
  vertex(385,150);
  vertex(457.5,500);
  vertex(542.5,500);

  endShape(CLOSE);

  beginShape(tiebottom);
  strokeWeight(2.5);
  stroke(255);
  fill(222,0,0);
  
  vertex(500,200);
  vertex(535,350);
  vertex(540,500);
  vertex(500,600);
  vertex(460,500);
  vertex(465,350);

  endShape(CLOSE);

  beginShape(tietop);
  strokeWeight(2.5);
  stroke(255);
  fill(222,0,0);

  vertex(475,150);
  vertex(525,150);
  vertex(550,175);
  vertex(525,250);
  vertex(475,250);
  vertex(450,175);

  endShape(CLOSE);

beginShape(shirtright);
strokeWeight(2.5);
stroke(0);
fill(255,255,255);
    
  vertex(525,150);
  vertex(575,200);
  vertex(650,100);

  endShape(CLOSE);

beginShape(shirtleft);
strokeWeight(2.5);
stroke(0);
fill(255,255,255);
    
  vertex(475,150);
  vertex(425,200);
  vertex(350,100);

  endShape(CLOSE);

}

function mouseClicked() {
  // Check if the mouse click is within the canvas boundaries
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    saveCanvas(c, "suit", "png"); // Save canvas only if clicked inside
  }
}