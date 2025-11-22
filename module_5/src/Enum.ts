//  enum userRoles{
//     ADMIN="admin",
//     CUSTOMER="customer",
//     MODERATOR="mod",
//     GUEST="guest"
// }

const userRoles={
    ADMIN: "admin",
    MOD: "mod",
    GUEST: "guest"
} as const;

type useroles=typeof userRoles[keyof typeof userRoles]

const checkPermission=(role:useroles):void=>{
    if(role===userRoles.ADMIN){
        console.log("Full access granted");
    } else if(role===userRoles.MOD){
        console.log("Limited access");

    }
    else{
        console.log("No access");
    }
}

checkPermission(userRoles.MOD);
