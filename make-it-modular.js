myModule = require('./mymodule')

var dir = process.argv[2]
var extension = process.argv[3]

myModule(dir,extension,function(err,files){
    if(err) return console.log('error')
    else {
        for(let y of files){
            console.log(y)
        }
    }
})