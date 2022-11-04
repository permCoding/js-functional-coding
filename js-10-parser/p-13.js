/*
 * скачать html с сайта
 * выбрать содержимое по id
 */

const axios = require('axios');
const cheerio = require('cheerio');

const load_html = async (url) => {
    let get = await axios.get(url);
    let $ = cheerio.load(get.data);
    $('#top20 > tbody > tr')
        .each((i, elm) => {
            let tmp = [];
            $(elm).find('td').each((j,e) => tmp.push($(e).text()));
            arr.push({'id': tmp[0], 'lang': tmp[4], 'rat': tmp[5]});
        });
};

console.clear();
console.log("* *\n".repeat(5));

let url = 'https://www.tiobe.com/tiobe-index/';

let arr = [];
load_html(url);
console.log(arr);
