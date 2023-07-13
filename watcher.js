
const fs = require('fs')

const FILES = ["yarn.lock", "package-lock.json", "yarn-error.log"];

for(let file of FILES) {
    fs.unlink(file, function (err) {
        if (err) console.log(`fail to remove file ${file}`);
        console.log(`${file} removed`);
    })
}