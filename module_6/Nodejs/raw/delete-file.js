const fs=require('fs');
fs.writeFileSync('./output/temp.txt',"This is temp file");
console.log("File write")

if(fs.existsSync('./output/temp.txt')){
    console.log("file exists")
}
else{
    console.log("file doesnt exist")
}

try{
    fs.unlinkSync('./output/temp.txt');
    console.log("File Deleted Successfully")
}
catch(error){
    console.error(error.message);
}


fs.writeFile('./output/temp1.txt',"This is temp1 file", (error)=>{
    if(error){
        console.error(error.message);
        return;
    }
    console.log("File temp1 written");
    fs.unlink('./output/temp1.txt', (error) => {
        if(error){
            console.error(error.message);
            return;
        }
        console.log("File temp1 deleted successfully");
    });
});