type User={
    id:number;
    name: {
        firstname: string;
        lastname: string;
    },
    contactNo: string;
    address: {
        city:string;
    }

}

const user1:User={
    id:1,
    name: {
        firstname: "str",
        lastname: "sty",
    },
    contactNo: "0716161616",
    address: {
        city:"dhaka"
    }
}

console.log(user1);

type addfunc=(num1:number, num2:number)=>number;

const Add:addfunc=(num1,num2)=>num1+num2;

console.log(Add(2,3))
