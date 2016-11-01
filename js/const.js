/* FILE FOR CONSTANT VALUES (I.E. VALUES THAT NEVER CHANGE IN SESSION) */

// Color palette
var colorPrimary = "#517C62"; // dark green
var colorSecondary = "#D8E0B3";  // light green
var colorAccent = "#E9DFF4";  // gray
var colorDark = "#000000"; // black
var colorLight = "#FFFFFF"; // white
var colorArray = [
	"#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", 
	"#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39",
	"#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E",
	"#607D8B", "#000000", "FFFFFF"
]; // Material design color scheme

//[colorPrimary, colorSecondary, colorAccent, colorDark, colorLight];

// Center of screen
var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

// Canvas refresh rate
var refreshRate = 20; // ms

// Physics
var objectAcc = 1.5;
var widthAcc = 5;

// Object attributes
var orbWidth = 0;
var numOrbs = 10;
var orbRefreshRate = 500;
var textRefreshRate = 1000;
