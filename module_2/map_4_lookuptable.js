const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const LookUpTable=postsArray.reduce((lookuptable,posts)=>{
  return lookuptable[posts.id]=posts,lookuptable


},{})
console.log(LookUpTable);



const students = [
  { id: "s-001", name: "John Doe", grade: "A", subject: "Math" },
  { id: "s-002", name: "Jane Smith", grade: "B", subject: "English" },
  { id: "s-003", name: "Bob Johnson", grade: "A", subject: "Math" },
  { id: "s-004", name: "Alice Brown", grade: "C", subject: "Science" },
  { id: "s-005", name: "Mike Wilson", grade: "B", subject: "English" },
];

const studentLookup=students.reduce((stloouptable,st)=>{
//group students by grade A,B,C explicitly
if(!stloouptable[st.grade]){
  stloouptable[st.grade]=[];
}
stloouptable[st.grade].push(st);
return stloouptable;


},{})
console.log(studentLookup);

const subjectLookup=students.reduce((stlooktable,st)=>{

if(!stlooktable[st.subject]){
  stlooktable[st.subject]=[];
}
stlooktable[st.subject].push(st);
return stlooktable;


},{})
console.log(subjectLookup);