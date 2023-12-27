
const {readFileSync, writeFileSync} = require ('fs')

const first = readFileSync ('./Content/first.txt', 'utf8')
const second = readFileSync ('./Content/second.txt', 'utf8')

writeFileSync('./Content/result.txt', `Here is it: ${first}, ${second}`, {flag :'a'})

console.log(first, second)
