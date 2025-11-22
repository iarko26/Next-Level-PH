/*
Create a function getUniqueValues that accepts two arrays and returns a new array containing only the unique values from both arrays, without any duplicates.

Requirements:
You must write the correct type for the function parameter and the return type.
The function should handle arrays of strings or numbers.
You are not allowed to use any built-in methods to solve this problem.
Sample Input:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
Sample Output:
[1, 2, 3, 4, 5, 6, 7];

*/

function getUniqueValues(nums1:(string | number)[], nums2: (string | number)[]):(string | number)[] {
const res:(string|number)[]=[]
for (let i = 0; i < nums1.length; i++) {
        res.push(nums1[i]);    
    }

for( let j=0;j<nums2.length;j++){
    let isExist=false;
    for(let k=0;k<res.length;k++){
        if(res[k] === nums2[j]){
            isExist=true;
            break;
        }
    }
    if(!isExist){
        res.push(nums2[j]);
    }
}
return res;





}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(getUniqueValues(array1,array2));