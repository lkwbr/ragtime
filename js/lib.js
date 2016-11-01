/* FILE HOLDING MAIN/SECONDARY FUNCTIONS FOR PROJECT */

// Gets called on every frame
function draw() {
	drawBackground();
	renderObjects();
}

function drawBackground() {
	ctx.fillStyle = colorLight;
	ctx.fillRect(0,0,canvas.width,canvas.height);
}

// Object array
var objectArray = [];

// Mountain stuff
var mountainSize = 0;

// Loading text stuff
var loadingText = "LOADING";
var loadingEllipsis = "";

// Draws all dynamically changing objects
function renderObjects() {
	drawText();
	drawMountain();

	// Go through all objects and draw them
	for (var i = (objectArray.length - 1); i >= 0; i--) {
		objectArray[i].draw();
	}
}

/* Interval stuff */

// Add random orbs in random time!
setInterval(function() {
	addRandomOrb();
}, orbRefreshRate);

// Update loading text
setInterval(function() {
	loadingEllipsis += ".";
	if (loadingEllipsis == "....") loadingEllipsis = "";
}, textRefreshRate);

/* Helper functions */

function drawText() {
	// Draw loading text
	ctx.font = "80px Arial";
	ctx.fillStyle = colorDark;
	ctx.fillText(loadingText + loadingEllipsis, centerX - 10*20, centerY);
	// Underneath text ;)
	ctx.font = "20px Arial";
	ctx.fillStyle = colorDark;
	ctx.fillText("PLEASE WAIT YOURSELF WHILE WE LOAD", centerX - 10*19.5, centerY + 23);
}

function drawMountain() {
	ctx.beginPath();
	ctx.arc(centerX, window.innerHeight, mountainSize, 0, 2*Math.PI);
	ctx.fillStyle = colorDark;
	ctx.fill();

	if (mountainSize < (centerY - 50)) { mountainSize += 0.1 }
}

function addRandomOrb() {
	var pastOrb = null;
	if (objectArray.length > 0) { pastOrb = objectArray[objectArray.length - 1]; }
	var newColor = colorArray[Math.floor(Math.random() * (colorArray.length - 1))];
	var newWidth = Math.floor(Math.random() * orbWidth);
	var newOrb = new Orb(centerX, centerY, orbWidth, newColor, pastOrb);
	objectArray.push(newOrb);
}

// Called on page resizing
window.onresize = function(event) {
	// Update canvas dimensions
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// Update center point
	centerX = window.innerWidth / 2;
	centerY = window.innerHeight / 2;
}