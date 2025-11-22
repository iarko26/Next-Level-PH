const usdtobdt=(input:string | number |
    undefined
):number=>{
if(typeof input==="number"){
    return input*122.13
}
else if(typeof input==="string"){
    const [value]=input.split(" ");
   return Number(value)*122.13;
}
else{
    return 0
}

}

const result1= usdtobdt(100) as number;
console.log(result1)
const result2=usdtobdt('100 USD').toString();
console.log(result2);

