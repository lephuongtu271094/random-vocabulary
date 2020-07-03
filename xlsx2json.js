const XLSX = require('xlsx');
const Fs = require('fs')
const workbook = XLSX.readFile('3000.xlsx');
const sheet_name_list = workbook.SheetNames;
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])

Fs.writeFileSync(`${__dirname}/3000.json`, data.filter((ele => typeof ele.stt === 'number')));