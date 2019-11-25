// ЛЕКЦИЯ 3 - 20.09.2019
// перевод числа
// палиндром
// шифрование

// let f = (x,y) => x+y ;
// let f2 = function(x,y) { return x+y; };

// arr = [0,2,3,4];
// console.log( arr.reduce( f2 ) );




// установить пакет: npm install readline-sync 

// readln = require('readline-sync'); // подключаем модуль
// 	// console.log("- введите целое число");

// require('child_process').exec('chcp 65001 | dir'); // для windows
// answer = readln.question('- введите двоичное число');
// 	// читаем с консоли


// 1 - перевод по степеням с parseInt
// arr = answer
// 	.split('')
// 	.reverse()
// 	// .map(elm=>+elm)
// 	.reduce( (acc,elm,index) => acc + parseInt(elm)*Math.pow(2,index), 0 );
// console.log(arr);



// 2 - перевод по степеням с +
// console.log(
// 	require('readline-sync')
// 		.question('введите двоичное число - ')
// 		.split('')
// 		.reverse()
// 		.map(elm=>+elm)
// 		.reduce( (acc,elm,index)=> acc + elm*Math.pow(2,index))
// );



// 3 - перевод функциональный накопительный
// console.log(
// 	require('readline-sync')
// 		.question('введите двоичное число - ')
// 		.split('')
// 		.reduce( (acc,elm) => 2*(+acc) + +elm )
// );



// работаем со строками



// 4 - палиндром с пробелами
// var rev1 = str => str.split('').reverse().join('');
// var rev2 = str => '\u202E' + str;

// s = "Аргентина манит негра";
// check = s
// 	.toLowerCase()
// 	.split('')
// 	.filter(smb => smb != ' ')
// 	.join('');

// console.log(check);
// console.log(rev1(check));
// console.log(rev2(check));
// console.log(check==rev1(check)? "палиндром": "нет");



// 5 - палиндром с выбранными символами
var rev = str => str.split('').reverse().join('');
var z = "-!?.,:; $#";

s = "Аргентина - манит негра!"
check = s
	.toLowerCase()
	.split('')
	.filter(smb => z.indexOf(smb) == -1)
	.join('');

console.log(check);
console.log(check==rev(check)? "палиндром": "нет");



// 6 - шифрование
// x = 5
// k = 2
// t = x^k
// console.log(t, t^k);


// console.log(
// 	'Мама мыла раму'
// 		.split('')
// 		.map( elm => elm.charCodeAt() )
// );




// 7 - 
// function code(input) {
//     let output = "";
//     for (let i=0, len=input.length; i<len; i++) {
//         codeSmb = input[i].charCodeAt();
//         newCode = codeSmb^key;
//         smb = String.fromCharCode(newCode);
//         output += smb;
//     }
//     return output;
// }
// // console.clear();
// var key = 9876;
// strInput = 'Мама мыла раму';
// strOutput = code(strInput);

// console.log(strInput); // исходная строка
// console.log(strOutput); // зашифрованная
// console.log(code(strOutput)); // дешифрованная





// 8 -
// function newSmb(smb) {
//     return String.fromCharCode(smb.charCodeAt(0)^key);
// }
// key = 9876;
// strInput = 'Мама мыла раму';
// newStr = strInput
//     .split('')
//     .map(elm => elm=String.fromCharCode(elm.charCodeAt(0)^key) )
//     .join('');

// console.log(strInput);
// console.log(newStr);
// console.log(newStr.split('').map(newSmb).join(''));
