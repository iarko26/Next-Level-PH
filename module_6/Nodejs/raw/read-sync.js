const fs=require('fs');
console.log("...reading ");

try{
const data=fs.readFileSync("./data/diary.txt", "utf-8");

console.log(data);
}catch(e){
    console.log(e.message)
}

