var ypos = 140;
var ystep = 30;
var xpos = 80;
var xstep = 30;

function setup() {
	createCanvas(400, 400);
	noLoop();
}

function draw() {
	background(255);
	fill(50);
	noStroke();

	for (var j = 0; j < 5; j++) {
		for (i = 0; i < 9; i++) {
			ellipse(xpos+(xstep*i), ypos+(ystep*j), 20, 20);
		}
	}
}

