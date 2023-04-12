function setup() {
  createCanvas(800, 800);
  dots = [0];
  for (let dotsDrawn = 0; dotsDrawn < 50; dotsDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisHue = random(360);
    addDot[dotsDrawn] = new addDot(thisX, thisY, thisHue);
  }
}

function draw() {
  background("gray");
  for (let dotsShown = 0; dotsShown < 50; dotsShown++) {
    addDot[dotsShown].move();
    addDot[dotsShown].show();
    
  }
}

class addDot {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.addX = random(5);
    this.addY = random(4,7);
    this.colorVar = random(100,200)
  }
  move() {
    this.x = this.x + this.addX;
    this.y = this.y + this.addY
    let dotIsTooFarLeft = this.x < 0;
    let dotIsTooFarRight = this.x > width;
    let dotIsTooFarUp = this.y < 0
    let dotIsTooFarDown = this.y > height
    if (dotIsTooFarLeft || dotIsTooFarRight) {
      this.addX = -this.addX;
    }
    if (dotIsTooFarUp || dotIsTooFarDown){
      this.addY = -this.addY
    }
  }
  show() {
      push();
  translate(this.x, this.y);
  fill(this.colorVar,0,255);
  ellipse(0, 0, 50, 50);
  fill(0);
    noStroke()
  beginShape();
  fill("gray")
  vertex(0 - 7, 0);
  vertex(0 + 30, 0 + 10);
  vertex(0 + 30, 0 - 10);
  endShape();
  pop();
  }
}
