var gpio = require('rpi-gpio')
var gpiop = gpio.promise;

let setupPin11 = gpiop.setup(11, gpio.DIR_OUT);

let setupPin12 = gpiop.setup(12, gpio.DIR_OUT);

Promise.all([setupPin11, setupPin12]).then(() => {
	gpio.write(11, false);
	gpio.write(12, false);
}).catch((err) => {
	console.log('Error: ', err.toString())
});