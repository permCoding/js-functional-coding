class Smart {
	constructor(name, price) {
		this.name = name;
		this.price = parseInt(price);
	}
}

function getLines(fileInput) {
	return require('fs')
		.readFileSync(fileInput, 'utf-8')
		// .split('\n') // for Linux
		// .split('\r\n') // for Windows
		.split(/\r\n|\n/) // re
		.slice(1)
		.filter(line => line.length > 0);
}

function getArraySmarts(lines) {
	let arr = [];
	for (let line of lines) {
		let tmp = line.split('\t')
		arr.push(new Smart(tmp[0], tmp[1]));
	}
	return arr;
}

function getArray(fileInput) {
	return require('fs')
		.readFileSync(fileInput, 'utf-8')
		.split('\r\n')
		.slice(1)
		.filter(line => line.length > 0)
		.map(elm => parseInt(elm))
		.sort((a, b) => a - b);
}

function writeArray(fileOutput, lines) {
	require('fs')
		.writeFileSync(fileOutput, lines.join('\n'));
}

module.exports.getArray = getArray;
module.exports.writeArray = writeArray;
module.exports.getLines = getLines;
module.exports.getArraySmarts = getArraySmarts;