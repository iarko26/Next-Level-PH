const numbers=[100,3,45,23,67,89,2,1,0,55];
const sortedNumbers=numbers.sort((a,b)=>a-b); //in-place sorting[mutates the original array]
console.log(numbers);

const fruits = ["Banana", "apple", "Cherry", "date"];

console.log(fruits.sort((a,b)=>a.localeCompare(b)));


const nesteArray=[[2,3],[4,5],[6,7],[8,9]];
console.log(nesteArray.flat());

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const Filteredtags=[...new Set(tagsFromPosts.flat())] //spread operator to convert set back to array
console.log(Filteredtags);



const oddnumbers=[1,3,5,7,9];
const hasoddnumbers=oddnumbers.some(oddnumbers=>oddnumbers%2!==0);
console.log(hasoddnumbers);

const currentUserRoles = ["user", "editor", "admin"];
const featureAccessRoles = ["customer", "manager"];

const hasAccess=currentUserRoles.some((role)=>featureAccessRoles.includes(role));
console.log(hasAccess);

const arr=Array.from({length:10},(_,index)=>index);
console.log(arr);

const newarray=Array.from([1,2,3],(val,i)=>val*val);
console.log(newarray);


const range=(start,stop,step)=>Array.from(
    {
        length:Math.ceil((stop-start)/step)
    },
    (_,i)=>start+i*step
)
console.log(range(1,10,2));



const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];


const subTotal=cartItems.reduce((accum,products)=>{
    return accum +products.price * products.quantity
},0
)
console.log(subTotal);

const biggestNumbers=[5, 2, 8, 1, 9];

const FindBiggest=biggestNumbers.reduce((accum,number)=>{
    return accum>number?accum:number
},0)
console.log(FindBiggest);

const words = ["Hello", "world", "how", "are", "you"];
const sentence=words.reduce((accum,word)=>{
    return accum + " " + word
}," ")
console.log(sentence.trim());


const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorer=players.reduce((accum,PlayerName)=>{
   return accum.score>PlayerName.score?accum:PlayerName
    

},players[0])
console.log(bestScorer);
