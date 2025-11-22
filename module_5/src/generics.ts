//basic

type GenericArray<T>=Array<T>;

const  nameofList:GenericArray<string>=["Array","Array1"];
console.log(nameofList);
type User={
    name:string,
    age:number
}
const userList:GenericArray<User>=[
{
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
]

console.log(userList)

function getFirst<T>(items:T[]){
    return items[0];
}



function swap<A,B>(a:A,b:B):[B,A]{
    return [b,a]
}

console.log(swap(5, "hello"));


interface Apiresponse<T>{
    data:T,
    status:number,
    message:string
}

const studentResponse:Apiresponse<User>={
    data:{name:"Arnob", age:12},
    status:200,
    message:"Success"

}

console.log(studentResponse);

interface KeyValu<K,V>{
    key:K,
    value:V

}
const stringNumber: KeyValu<string, number> = {
  key: "age",
  value: 25
};

