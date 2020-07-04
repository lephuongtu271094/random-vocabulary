// const XLSX = require('xlsx');
const fs = require('fs')
// const workbook = XLSX.readFile('3000.xlsx');
// const sheet_name_list = workbook.SheetNames;
// const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])

// Fs.writeFileSync(`${__dirname}/3000.json`, data.filter((ele => typeof ele.stt === 'number')));

async function print(path) {
    const files = await fs.promises.readdir(path);
    for (const file of files) {
        console.log(file);
        let oldPath = `${__dirname}/public/images/${file}`
        let newPath = `${__dirname}/public/images/${file.replace(/%/gi, '')}`
        fs.renameSync(oldPath, newPath)
    }
}

print('./public/images').catch(console.error);