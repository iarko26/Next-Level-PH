//Problem Statement

//You are given two large arrays, listA and listB. Each array contains user objects.
//A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

//Your task is to write an efficient function that takes both lists as input
//and returns the total count of users that are present in both lists.

//! Do not change anything in data setup part
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}




// users 25000 to 49999 are common (25,000 common users)
//----------Data setup block---------------//

// --- ALGORITHMS --- //


//naive

const naiveApp=(usersA,usersB)=>{
    let count=0;
    //O(n)
    for(let listA of usersA){
        //O(n)
        for(let listB of usersB){
            if(listA.id===listB.id){
                count++;
            }
        }
    }
    return count;
}
console.time('naive');
console.log(naiveApp(usersA,usersB));
console.timeEnd('naive');


const effcientCount=(usersA,usersB)=>{
    //o(n)
    const lookuptable=new Set(usersA.map(user=>user.id));
    let count=0;
    //o(n)
    usersB.forEach(list => {
        if(lookuptable.has(list.id)){
            count++;
        }
        
    });
    return count
}
console.time('Lookup Table');
console.log(effcientCount(usersA,usersB));
console.timeEnd('Lookup Table');