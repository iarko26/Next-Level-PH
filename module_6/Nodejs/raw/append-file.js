const fs=require('fs');
fs.writeFileSync("./output/app.log","Application Started\n")
console.log("File Created");

const logentry1=`\n ${new Date().toDateString()} user logged in`
fs.appendFileSync("./output/app.log",logentry1);


const logentry2=`\n ${new Date().toDateString()} data fetched`
fs.appendFileSync("./output/app.log",logentry2);

console.log("task complete")