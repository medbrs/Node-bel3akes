let str = 0
for(let i = 2; i < process.argv.length;i++){
    str= str + Number(process.argv[i])
}

console.log(str)