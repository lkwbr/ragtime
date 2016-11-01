/* FILE FOR DRAWING ONTO CANVAS */

// Get canvas and context for drawing
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set canvas dimensions to window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Render
setInterval(function() {
	draw();
}, refreshRate);