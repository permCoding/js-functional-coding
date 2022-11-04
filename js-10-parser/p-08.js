/*
 * забрать csv-файл
 * и обработать его содержимое 
 */

const fs = require('fs');
const csvjson = require('csvjson');
const rp = require('request-promise');

const url = 'https://pCoding.ru/csv/students.csv';

const get_json = () => {
    rp(url)
        .then((data) => { // success
            let arr = csvjson.toObject(data, { delimiter: ',' });;
            let res = arr
                .sort((a, b) => a["nameSt"] > b["nameSt"]? +1: -1)
                .slice(0, 3);
            return res;
        })
        .catch((err) => { console.error(err) });
}


// не проверено
