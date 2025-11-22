/*
Problem 2:
Create a function getLength that accepts a value which may be a string or an array, and returns the length of the value.

If the input is a string → return the number of characters.
If the input is an array → return the number of elements.
Requirements:
You must write the correct type for the function parameter and the return type.
You must use type checking to handle each case (typeof or Array.isArray).
Sample Input:
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
Sample Output:
10;
4;


*/


const  getLength=(input:string | any[]):number=>{
if(typeof input==="string"){
    return input.length;
}
else if(Array.isArray(input)){
    return input.length;
}

else{
    return 0;
}

}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));


