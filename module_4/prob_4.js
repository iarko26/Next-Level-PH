// Problem Statement

// Given an array of integers numbers and an integer target,
// return the indices of two numbers such that they add up to target.
// If there is no solution then return undefined

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Time Complexity => O(n)

//? Input
// [2, 11, 7, 15] and 9

//? Output
// [0, 2] (because 2 + 7 = 9)


function twosumnaive(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j];
            }
        }
    }
    return undefined;
}

console.log(twosumnaive([1, 2, 3], 5))



function twosumoptimal(nums,target){
    let compMap=new Map();
    for(let i=0;i<nums.length;i++){
        const current=nums[i];
        let complement=target-current;
        if(compMap.has(complement)){
            return [compMap.get(complement),i]; 
        }
        compMap.set(current,i);

    }
    return undefined;
}

console.log(twosumoptimal([1, 2, 3, 5], 7))