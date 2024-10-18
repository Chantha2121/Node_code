const {readFile,writeFile} = require('fs')

console.log('Start.');
readFile('./stext/first.txt',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile("./stext/second.txt",(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile("./stext/text1.txt",`Here this is my result: ${first} and ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task');
        })
    })
})
console.log('Starting next time ....');