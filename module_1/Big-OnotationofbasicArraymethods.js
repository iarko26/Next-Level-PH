
const startTTime=performance.now(); 

for(let i=0;i<=500;i++){
    console.log(i);
}

const endTime=performance.now(); 

console.log(`The loop time :${endTime-startTIme}ms`);


const arr1=[];
const arr2=[];

for(let i=0;i<100000;i++){
    if(i<50000){
        arr1.push(i);
    }
    arr2.push(i);
}
console.log("First array:", arr1.length);
console.log("Second array:", arr2.length);


const firstuserlist=arr1.map((number)=>(
    {
        userId:number,
    }
))



const seconduserlist=arr2.map((number)=>(
    {
        userId:number,
    }
))
const startTime1=performance.now();
const user=firstuserlist.find((user)=>user.userId===2000);
const endTime1=performance.now();
console.log(endTime1-startTime1+"ms");