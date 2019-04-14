var gpio = require('rpi-gpio')
var gpiop = gpio.promise;

let onOff = true;

let setupPin11 = gpiop.setup(11, gpio.DIR_OUT);
let setupPin12 = gpiop.setup(12, gpio.DIR_OUT);

let blink = function() {
	onOff = !onOff;
	gpio.write(11, onOff);
	gpio.write(12, !onOff);

};

Promise.all([setupPin11, setupPin12]).then(() => {
	setInterval(blink, 1000);
}).catch((err) => {
	console.log('Error: ', err.toString())
});