var gpio = require('rpi-gpio')
var gpiop = gpio.promise;

let on = true;
let off = false;

let setupPin11 = gpiop.setup(11, gpio.DIR_OUT);
let setupPin12 = gpiop.setup(12, gpio.DIR_OUT);
let setupPin13 = gpiop.setup(13, gpio.DIR_OUT);
let setupPin15 = gpiop.setup(15, gpio.DIR_OUT);
let setupPin16 = gpiop.setup(16, gpio.DIR_OUT);	

let blink = function() {
	
	// BLINK GREEN
	gpio.write(11, on);
	gpio.write(11, off);

	// BLINK RED
	gpio.write(12, on);
	gpio.write(12, off);

	// BLINK YELLOW
	gpio.write(13, on);
	gpio.write(13, off);

	// BLINK BLUE
	gpio.write(15, on);
	gpio.write(15, off);

	// BLINK CLEAR
	gpio.write(16, on);
	gpio.write(16, off);
};

Promise.all([
	setupPin11,
	setupPin12,
	setupPin13,
	setupPin15,
	setupPin16
]).then(() => {
	setInterval(blink, 1000);
});