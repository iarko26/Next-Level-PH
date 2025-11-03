const course1={id:1,name:"JavaScript"};
const course2={id:2,name:"Python"}
/*
const obj={};
obj[course1]={courseId:"level1"};
obj[course2]={courseId:"level2"};
console.log(obj);
*/

const map=new Map();
map.set(course1,{courseId:"level1"});
map.set(course2,{courseId:"level2"});
/*
map.clear();
const Deleted=map.delete(course1);
console.log("Deleted:",Deleted);
console.log(map.has(course1));

map.forEach((val,key)=>{
    course1.name="JS Advanced";
    
 
})

console.log([...map.keys()]);//array of keys



for(let i  of map.keys()){
    i.name="Updated Name" + i.name; 
    
}*/
console.log(map.entries());


