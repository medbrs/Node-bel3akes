const fs = require ('fs')
const path = require('path')


fs.readdir(process.argv[2],function(err,list){
    if(err){console.log(err)
    }else{
        list.forEach(function(x) {
            if(path.extname(x)=== '.' + process.argv[3]){
                console.log(x)
            }
        })
    }
    console.log(x)
})