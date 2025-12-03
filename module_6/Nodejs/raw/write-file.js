const { error } = require('console');
const fs=require('fs');

const content1="This is content 1"

try{
    fs.writeFileSync("./output/test-1.txt",content1);
    console.log("sync");

}
catch(e){
    console.log(e.message);
}

const content2="This is content 2"

fs.writeFile("./output/test-2.txt",content2,(error)=>{
    if(error){
        console.error(message)
    }
    else{
        console.log("async write")
    }
});
