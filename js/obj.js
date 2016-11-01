/* FILE WITH MAIN OBJECTS FOR DRAWING */

// Main object
function Orb(x, y, width, color, pastOrb) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.color = color;
	this.pastOrb = pastOrb;

	// Derived attributes
	this.velX = ((Math.random() * -1) + (Math.random() * 1)) * (Math.random() * 20); // random horizontal
	this.velY = -25;//Math.random() * 20;
	this.widthAcc = Math.random() * widthAcc;

	this.draw = function() {
		// Stop drawing if out of bounds
		if (!
			(this.y < window.innerHeight && this.y >= 0) &&
			(this.x < window.innerWidth && this.x >= 0)) return;

		// Opacity
		ctx.globalAlpha = (window.innerHeight - y) / 500;

		// Draw circle
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();

		// Draw line
		if (pastOrb !== null) {
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.pastOrb.x, this.pastOrb.y);
			ctx.strokeStyle = this.color;
			ctx.stroke();
		}

		// Update width
		this.width += this.widthAcc;

		// Update postional things
		this.x += this.velX;
		this.y += this.velY;
		this.velY += objectAcc;
	}
};