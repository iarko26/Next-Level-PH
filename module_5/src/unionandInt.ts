type Userole="admin" | "customer" | "seller"

const getUserDasboard=(role:Userole)=>{
    if(role==="admin"){
        return `Login Successful, ${role}`
    }
    else if(role==="customer"){
      return `Login Successful, ${role}`
    }

     else if(role==="seller"){
     return `Login Successful, ${role}`
    }

    else{
       return `Login Successful, Guest`
    }
}

console.log(getUserDasboard("seller"))

type BasicUser = { name: string; email: string; };
type PremiumUser = { subscription: boolean; benefits: string[]; };
type FullUser= BasicUser & PremiumUser;

const user:FullUser={
    name: "Bob",
    email: "bob@example.com",
    subscription: true,
    benefits: ["free shipping", "priority support"]
}

console.log(user);