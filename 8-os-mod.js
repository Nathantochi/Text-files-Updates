const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`Uptime ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    mem : os.totalmem(),
    free : os.freemem(),
}

console.log(currentOS)