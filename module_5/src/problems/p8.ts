/*
Create a function calculateTotalPrice that accepts an array of product objects. Each product object contains the following properties:

name (string)
price (number)
quantity (number)
discount?: optional number from 0–100, representing a percentage discount
The function should return the total price of all products in the array, taking into account the discount for each product (if provided). If the array is empty, return 0.

Requirements:
You must write the correct type for the function parameter and the return type.
Use array methods (map, reduce, etc.) to calculate the total.
The total price of each product is calculated as: (price * quantity).
Correctly handle products with and without the discount property.
Sample Input:
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
Sample Output:
127.5;
*/
 
type Products={
    name:string,
    price:number,
    quantity:number,
    discount?:number
}

function calculateTotalPrice(res:Products[]):number{
  if(res.length===0){
    return 0
  }
  return res.reduce((a,p)=>{
    if(res.length===0){
        return 0;
    }
    let subtotal=p.price*p.quantity;
    if(p.discount){
        let discountAm=subtotal*((p.discount)/100);
        subtotal=subtotal-discountAm;
    }
    return subtotal+a;


  },0)
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));