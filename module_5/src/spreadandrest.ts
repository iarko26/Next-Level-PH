const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3=[7,8,9];
arr1.push(...arr2,...arr3);
console.log(arr1);

const copy=[...arr1];
console.log(copy);

const extraelem=[...arr3,99,100];
console.log(extraelem);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const overrideobj={...obj1,b:3};
console.log(overrideobj);


const objinfo={...obj1,...obj2};
console.log(objinfo);



function sum(...numbers: number[]) {
    return numbers.map((elem: number, num: number) => elem + num);
}
console.log(sum(1, 2, 3, 4));
