const fs = require('fs');


let text = fs
	.readFileSync('input.txt', 'utf-8');


let lines = text.split(/\r\n|\n/);
// let lines = text.split(/\r?\n/);
// let lines = text.split(/\r{0,1}\n/);

lines.map(line => console.log(line));