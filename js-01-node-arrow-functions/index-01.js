var maxDefault = 10; // по умолчанию
var countDefault = 10; // по умолчанию

function getArrRnd(count=countDefault, max) {
	maxValue = max || maxDefault; // maxValue динамически
	return '0' // взять символ
		.repeat(count) // повторить count раз
		.split('') // разделить на массив
		.map(
			(elm) => elm=Math.floor((Math.random()*maxValue))
		); // сделать элементы массива случайными
}

var arr = getArrRnd();
arr = arr.sort((a, b) => (a - b));
console.log(arr);


function addNums(x, y) {
	return x + y;
}
function averageOfArray_(nums) {
    return nums.reduce(addNums) / nums.length;
}

function averageOfArray(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

avg = averageOfArray_(arr);
var arrFilter = arr.filter( elm => elm>avg );
console.log(arrFilter);

avg = averageOfArray(arr);
var arrFilter = arr.filter( elm => elm>avg );
console.log(arrFilter);