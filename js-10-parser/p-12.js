/*
 * скачать html с сайта
 * выбрать содержимое по id
 */

const axios = require('axios');
const cheerio = require('cheerio');

const load_html = async () => {
    const get_html = async (url) => {
        let { data } = await axios.get(url);
        return cheerio.load(data);
    };
    let arr = []
    let url = 'https://www.tiobe.com/tiobe-index/';
    let $ = await get_html(url);
    $('#top20 > tbody > tr')
        .each((i, elm) => {
            let tmp = [];
            $(elm).find('td').each((j,e) => tmp.push($(e).text()));
            arr.push({'id': tmp[0], 'lang': tmp[4], 'rat': tmp[5]});
        });
    return arr;
};


console.clear();
console.log("* * *\n".repeat(5));

(async function() {
    let html = await load_html();
    console.log(html);
})();
