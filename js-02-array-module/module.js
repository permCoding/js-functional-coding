function getRandomArray(count, max) {
	return '0'
		.repeat(count)
		.split('')
		.map( (elm) => elm=Math.floor((Math.random()*max)) );
}

module.exports.getRandomArray = getRandomArray;