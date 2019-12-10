    const fs = require('fs')
    const path = require('path')
    let arr = []

    module.exports = (folderName,extension,callback)=>{
        fs.readdir(folderName,(err,files)=>{
            if(err) return callback(err)
            else {
                for(let i = 0 ; i < files.length; i++){
                    path.extname(files[i]) === ('.' + extension ) && arr.push(files[i])
                }
                callback(null,arr)
            }
        })
    }