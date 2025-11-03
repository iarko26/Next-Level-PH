const set=new Set();
set.add("apple");
set.add("banana");
set.add("orange");
set.add("apple"); 
console.log(set);

const arr=["apple","banana","orange","apple"];
const newSet=new Set(arr);
newSet.add("grape");
newSet.forEach((value)=>console.log(value));
const test=Array.from(newSet);

console.log(test);
const hasentry=newSet.has("banana");
console.log("Has banana:",hasentry);
const delEntry=newSet.delete("orange");
console.log("Deleted orange:",delEntry);
console.log(newSet);