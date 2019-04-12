var gpio = require('rpi-gpio')
var gpiop = gpio.promise;

let delay = 2000;
let onOff = true;

let setupPin11 = gpiop.setup(11, gpio.DIR_OUT);
let setupPin12 = gpiop.setup(12, gpio.DIR_OUT);

Promise.all([setupPin11, setupPin12]).then(() => {

	setTimeout(function() {
		onOff = !onOff;
		gpio.write(11, onOff);
		gpio.write(12, !onOff);
	}, delay);
	
}).catch((err) => {
	console.log('Error: ', err.toString())
});