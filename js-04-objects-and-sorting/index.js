let utils = require('./utils');

let lines = utils.getLines('smarts.txt');

utils
	.getArraySmarts(lines)
	.sort((a, b) => a.price - b.price)
	.map(smart => console.log(smart.price + '\t' + smart.name));



// let arr = process.argv;

// let fileInput = arr[2];
// let fileOutput = arr[3] == undefined ? 'output.txt': arr[3];

// let lines = utils.getArray(fileInput);
// utils.writeArray(fileOutput, lines);
