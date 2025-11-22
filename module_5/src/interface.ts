interface IPerson{
    name:string,
    age:number,
    greet():string
}

const person: IPerson={
    name:"Bob",
    age:12,
    greet(){
        return `This is ${this.name}`
    }
}

interface Iemployee extends IPerson{
    department:string,
    salary:number
}

const employee:Iemployee={
    name:"Alice",
    age:30,
    department:"CSE",
    salary:12000,
greet() {
        return `Hi, I'm ${this.name} from ${this.department}`;
    }
    
}

class Manager implements Iemployee{
    name: string;
    age: number;
    department: string;
    salary: number;

    constructor(name:string,age:number,department:string,salary:number){
        this.name=name;
        this.age=age;
        this.department=department;
        this.salary=salary
    }
}

const result= new Manager("Charlie",12,"EEE",12000);
console.log(result);



interface IAdd{

}

interface Ifriends{
    [index:number]:string;
}
const friends:Ifriends=["A","B","C"];
console.log(friends)



