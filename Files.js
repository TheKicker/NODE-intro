const files = require('fs')

// You can do it this way, but not recommended (don't hog the thread!)
const f1 = files.readdirSync('./')
console.log(f1)

console.log("-------------------------------------------")

// Proper way
const f2 = files.readdir('./', function(err, ffs){
    if(err) console.log(`Whoops, there is an error!`, err)
    else console.log(`Whoa, so many files!`, ffs)
})