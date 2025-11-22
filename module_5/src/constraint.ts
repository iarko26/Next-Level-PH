type Student={
  id:number,
  name:string,

}

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
    return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id:233,
  name:"Alice",
  hasWatch: true,

};

const result = addStudentToCourse(student3);
console.log(result);

type RichPeopleVehicle={
  car:string,
  bike:string,
  cng:string
}

type myvehicle1= "car" | "bike" | "cng"

type myvehicle2= keyof RichPeopleVehicle;

const myvehicle:myvehicle2="bike"

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user:User={
  id:222,
  name:"arnob",
  address:{
    city:"Dhaka"
  }

}

// const objectProperty=(obj:User, key:keyof User)=>{
//   return obj[key];
  
// }

// const res=objectProperty(user,"address");

// console.log(res)

const objectProperty=<T>(obj:T, key:keyof T)=>{
  return obj[key];
  
}

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};


const res=objectProperty(user,"address");
const res1=objectProperty(product,"brand");

console.log(res)
console.log(res1);