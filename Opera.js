const opera = require('os')

var fre = opera.freemem()
var tot = opera.totalmem()
var usr = opera.userInfo().username

console.log(`Hello ${usr}, you have ${fre} free and ${tot} total`)