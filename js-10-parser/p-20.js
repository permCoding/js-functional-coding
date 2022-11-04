/*
 * забрать csv-файл
 * и обработать его содержимое 
 */

const request = require('sync-request');
const cheerio = require('cheerio');
const _ = require('lodash');

const select_tag = (data) => {
    let $ = cheerio.load(data);
    let arr = [];
    $('#top20 > tbody > tr')
        .each((_, elm) => {
            let tmp = [];
            $(elm).find('td').each((_,e) => tmp.push($(e).text()));
            arr.push({'id': tmp[0], 'lang': tmp[4], 'rat': tmp[5]});
        });
    return arr;
};

const url = 'https://www.tiobe.com/tiobe-index/';
let req = request('GET', url);
let data = req.getBody('utf8');
let arr = select_tag(data);
console.log(
    _(arr)
        .map(x => _.zipObject(["rat","lang"], [Number(x.rat.split('%')[0]),x.lang]))
        .orderBy(["rat"], ["asc"]).value()
);
