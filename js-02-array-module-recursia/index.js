// function reverseString(arg) {
//     if (arg.length == 0) {
//         return arg;
//     }
//     else {
//         return reverseString(arg.substring(1, arg.length)) + arg[0];
//     }
// }

// var str = "Аргентина манит негра";
// console.log(reverseString(str));



// function getAmount(n) {
//     if (n == 0) {
//         return 0;
//     }
//     else {
//         return getAmount(n-1) + n;
//     }
// }

// var n = 100;
// console.log(getAmount(n));



// числа Фибоначчи 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// function getFib(n) {
// 	if (n<3) {
// 		return 1;
// 	}
// 	else {
// 		return getFib(n-1) + getFib(n-2);
// 	}
// }

// var n = 35; // с 35 уже заметно долго - почему?
// console.log(getFib(n));


// var tab = [];
// function getFib(n) {
// 	if (n<3) {
// 		return 1;
// 	}
// 	else {
// 		if (tab[n-1] == undefined) {
// 			tab[n-1] = getFib(n-1);
// 		}
// 		fib_1 = tab[n-1];
// 		if (tab[n-2] == undefined) {
// 			tab[n-2] = getFib(n-2);
// 		}		
// 		fib_2 = tab[n-2]; 
// 		return fib_1 + fib_2;
// 	}
// }

// var n = 35; // с 35 стало быстро - почему?
// console.log(getFib(n));
// console.log(tab);


// есть библиотеки...
// var _ = require('./lodash');
// var array = [1, 2, 3];
// _.reverse(array); // => [3, 2, 1]
// console.log(array);



// var _ = require('./lodash');
// var tab = [];
// function getFib(n) {
// 	if (n<3) {
// 		return 1;
// 	}
// 	else {
// 		if (tab[n-1] == undefined) {
// 			tab[n-1] = getFib(n-1);
// 		}
// 		fib_1 = tab[n-1];
// 		if (tab[n-2] == undefined) {
// 			tab[n-2] = getFib(n-2);
// 		}		
// 		fib_2 = tab[n-2]; 
// 		return fib_1 + fib_2;
// 	}
// }

// var n = 35; // с 35 стало быстро - почему?
// console.log(getFib(n));
// console.log(tab.slice(1));
// tab = _.compact(tab);
// console.log(tab);



// числа Фибоначчи - императивно - проще
// var arr = [1, 1];
// var n = 10;
// for (let i = 2; i<n; i++) {
// 	arr[i] = arr[i-2] + arr[i-1];
// }
// console.log(arr.join(' '));



// далее инструменты для работы с массивами

var fnA = elm => elm-1;
function fnB(elm) { 
	if (elm%2) 
	return elm; 
}

var count = 5;
var arr = [1, 2, 3, 4, 5];

console.log(
	arr
		.map( fnA )
		.filter( fnB )
		.reduce( (acc, elm) => acc + elm, 100)
);
// var arr = '0'.repeat(count).split('').map((elm) => +elm);
// console.log(tmp);

// var arr = '0'.repeat(count).split('').map((elm, index) => elm = index+1);
// console.log(arr);

// var arr = [...Array(count)].map((_, i) => i+1);
// console.log(arr);

// var m = require('./module');
// max = 100;
// var arr = m.getRandomArray(count, max);
// console.log(arr);







// function getArray(...agr) {
// 	return agr;
// }

// function check1(a, b) {
// 	return a-b; // Возвращает значение <0, 0 или >0
// }

// var check2 = function ab(a, b) {
// 	return a-b;
// }

// var check3 = (a, b) => a-b;

// var arr = getArray(1,2,2,4,9,0,7,6,3,10);

// console.log(arr.join(' '));

// console.log(arr.sort().join(' '));
// 	// error sorting in alphabetical order

// console.log(arr.sort(check3).join(' '));
// 	// check1 VS check2 VS check3

// console.log(arr.sort((a,b)=>a-b).join(' '));



// базовые функции map filter reduce 
// console.log(
// 	arr
// 		.map( elm => elm%10 )
// );
// console.log(
// 	arr
// 		.filter( elm => elm%2 ) // == 0
// );
// console.log(
// 	arr
// 		.reduce( (acc, elm) => acc + elm%10, 0 )
// );




// function sortByAge(arr) {
// 	arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }

// var vasya = { name: "Petro", age: 22 };
// var petya = { name: "Andro", age: 44 };
// var masha = { name: "Quadro", age: 33 };
// var arr = [ vasya, petya, masha ];
// sortByAge(arr);
// // arr.map(elm=>console.log(elm.name));
// arr.sort((a, b) => a.age > b.age ? 1 : -1).map(elm=>console.log(elm.name));

// var arrData = [];
// var obj1 = new Object();
// obj1.name = "Petro"
// obj1.age = 22;
// arrData.push(obj1);
// var obj2 = new Object();
// obj2.name = "Andro"
// obj2.age = 44;
// arrData.push(obj2);
// var obj3 = new Object();
// obj3.name = "Quadro"
// obj3.age = 33;
// arrData.push(obj3);

// arrData.sort( (a,b) => (a.age-b.age) ).map( elm => console.log(elm.name) );
// arrData.sort( (a,b) => (a.name>b.name? 1: -1) ).map( elm => console.log(elm.name) );