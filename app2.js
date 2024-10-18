const { log } = require('console');
const path = require('path');
console.log(path.sep);
const filePath = path.join('/Text/','stext','text1.txt');
console.log(filePath);
const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname,'Text','stext','text1.txt');
console.log(absolute);