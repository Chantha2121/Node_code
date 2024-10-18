const os = require('os')
const users = os.userInfo()
console.log(users)
console.log(`The system Update time ${os.uptime()} seconds`)
const currentOS = {
    name: os.type(),
    releas: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);