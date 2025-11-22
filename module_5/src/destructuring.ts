//object destructuring
//array des

const user={
    id:1,
    name:{
        firsname:"arnob",
        lastname:"ghosh",
        age:12
    },
    gender: "male",
   favouriteColor: "black",

};
const{
favouriteColor,
name:{
    lastname
}
}=user

console.log(favouriteColor);


const coords:number[]=[100,222,333];
const [x,y,z]=coords;
console.log(z);



