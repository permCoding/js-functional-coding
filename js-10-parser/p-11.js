/*
 * скачать html с сайта
 * выбрать содержимое по id
 */

import fetch from 'node-fetch';
import { load } from 'cheerio';

async function get_id(url, id) {
    const response = await fetch(url);
    const body = await response.text();
    
    let $ = load(body);
    let top20 = $(id);
    console.log(top20.children('tbody').text());
    // return content.get(0);
    // console.log(title.text());    
}

console.clear();

(async function() {
    let url = 'https://www.tiobe.com/tiobe-index/';
    let id = '#top20';
    // let id = 'tbody';
    let res = await get_id(url, id);
    // console.log(res);
})();
