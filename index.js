var gpio = require('rpi-gpio')
var gpiop = gpio.promise;

gpiop.setup(11, gpio.DIR_OUT).then(() => {
	return gpiop.write(11, true)
}).catch((err) => {
	console.log('Error: ', err.toString())
});

gpiop.setup(12, gpio.DIR_OUT).then(() => {
	return gpiop.write(12, true)
}).catch((err) => {
	console.log('Error: ', err.toString())
})