const fs = require ('fs')

const y = process.argv[2]

fs.readFile(y,function(err,data){
    if(err){
        console.log(err)
    }else
    var x = data.toString().split('\n').length - 1;
    console.log(x)
})

