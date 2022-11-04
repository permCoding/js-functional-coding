/*
 * забрать csv-файл
 * и обработать его содержимое 
 */

const fs = require('fs');
const csvjson = require('csvjson');
const request = require('sync-request');

const url = 'https://www.tiobe.com/tiobe-index/';

let req = request('GET', url);

let data = req.getBody('utf8');

fs.writeFileSync("./tiobe-index.html", data, "utf8");
