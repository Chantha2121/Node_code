const {readFileSync,writeFileSync} = require('fs')
console.log('Start');
const first = readFileSync('./stext/first.txt','utf8')
const second = readFileSync('./stext/second.txt','utf8')
console.log(first+'\n'+second);
writeFileSync('./stext/text1.txt',`Here this is my result: ${first} and ${second}`,
{flag: 'a'})
console.log('done with this task');
console.log('starting next task');