const fs = require('fs')
var x = fs.readFileSync(process.argv[2])
var y = x.toString().split('\n')
console.log(y.length-1)