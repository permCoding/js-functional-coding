/*
 * забрать csv-файл
 * и обработать его содержимое 
 */

const fs = require('fs');
const csvjson = require('csvjson');
const request = require('sync-request');

const url = 'https://pCoding.ru/csv/students.csv';

let req = request('GET', url);

let data = req.getBody('utf8');

let arr = csvjson.toObject(data, { delimiter: ',' });;

let res = arr
    .sort((a, b) => a["nameSt"] > b["nameSt"]? +1: -1);

console.log(res);
