var gpio = require('rpi-gpio')
var gpiop = gpio.promise;

let on = true;
let off = false;

let setupPin11 = gpiop.setup(11, gpio.DIR_OUT);
let setupPin12 = gpiop.setup(12, gpio.DIR_OUT);
let setupPin13 = gpiop.setup(13, gpio.DIR_OUT);
let setupPin15 = gpiop.setup(15, gpio.DIR_OUT);
let setupPin16 = gpiop.setup(16, gpio.DIR_OUT);

const blinkLight = function (pin) {
	console.log(`Turn On Pin ${pin}`);
	gpio.write(pin, on);

    return new Promise(resolve => {
        setTimeout(() => {
			console.log(`Turn Off Pin ${pin}`);
			gpio.write(pin, off);
            resolve();
        }, 500);
    });
}

const runLights = async () => {
	while (true) {
		console.log('Run Lights...');

		// BLINK GREEN
		await blinkLight(11);

		// BLINK RED
		await blinkLight(12);

		// BLINK YELLOW
		await blinkLight(13);

		// BLINK BLUE
		await blinkLight(15);

		// BLINK CLEAR
		await blinkLight(16);
	}
}


Promise.all([
	setupPin11,
	setupPin12,
	setupPin13,
	setupPin15,
	setupPin16
]).then(() => {
	runLights();
});