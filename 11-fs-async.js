
const {readFileSync, writeFileSync, readFile} = require ('fs')

console.log('start')

readFileSync('./Content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result

    readFileSync('./Content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
    const second = result
    writeFileSync('./Content/result.txt', `Here is it: ${first}, ${second}`, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('the end task')
         }
        )
    })
})
console.log('start soon')
