/*
Выбрать из входного файла все ссылки на учебники (это те, что с расширением doc, docx, DOC, DOCX). Вывести в файл task6.txt информацию в таком формате - два столбца разделённые символом TAB с соответствующим содержанием:
	Название_учебника Ссылка_на_учебник
*/

fs = require('fs');
fileNameIn = "refers.html"; // входной файл
text = fs.readFileSync(fileNameIn, 'utf8');

// как выбрать текст из тегов '> этот текст <'
reg_in_link = />.+(?=<)/g;
result = text.match(reg_in_link);
result.map(elm => console.log(elm.substr(1)));

console.log('- - -');

reg_6 = /https.+\.doc[x]?.+(?=<\/a>)|https.+\.doc[x]?.+[\s]*.+(?=[\s]*.+<\/a>)/gi;


// это два эквивалентных варианта:
	// reg_6 = /https.+\.do[c|cx]?.+(?=<\/a>)/gi;
	// reg_6 = /https.+\.doc[x]?.+(?=<\/a>)/gi;

// все начинающиеся с https "/https"
// далее некоторое количество любых символов ".+"
// далее символ точки, потом doc "\.doc"
// потом x 0 или 1 раз "[x]?"
// потом какие-то символы ".+"
// до закрытия тега ссылки не включая само закрытие "(?=<\/a>)"
// потом закрытие регулярки и флаги "/gi"

arrDoc = text.match(reg_6);
arrDoc
    .map(elm => console.log(
        elm.split('>')[1].replace(/\s+/g, ' ') + '\t' +
        elm.split('>')[0].replace(/\starget\s*=\s*_blank/, '')
    )
);
// переносы строк относятся к пробельным символам
// пробельные это и табуляторы и переносы строк
// любое кол-во пробельных символов "[\s]*"
// у меня есть это на странице 75


