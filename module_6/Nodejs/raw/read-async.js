const { error } = require('console');
const fs=require('fs');
console.log("...reading ");
fs.readFile("./data/diary.txt", "utf-8",(error,data)=>{
    if(error){
        console.error(message);
    }
    console.log("file content")
    console.log(data)
});

console.log("Run Immediately")