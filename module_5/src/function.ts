function addNormal(num1:number,num2:number){
    return num1+num2;
}


let addArrow=(name1:string,name2:string)=>name1+name2
console.log
(addArrow("arnob","ghosh"))

//object => function => method

const pooruser={
    name:"argho",
    balance:1000,
    addbalance(newbalance:number){
       return this.balance+=newbalance;
    }
}

console.log(pooruser.addbalance(2000));


const arr:number[]=[1,2,3];
const sqrarr=arr.map((elem:number)=>(elem*elem));
console.log(sqrarr);

