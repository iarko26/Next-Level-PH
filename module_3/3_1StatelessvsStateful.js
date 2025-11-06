// const counter=(amount)=>{
//     let count=0;
//     count=count+amount;
//     return amount;
// }
// console.log(counter(12))
// console.log(counter(2))


const Counter={
    count:0,
    add(amount){
        this.count=this.count+amount
    },
    print(){
        console.log(this.count)
    },
}
Counter.add(2);
Counter.add(3);
Counter.print()