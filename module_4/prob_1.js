// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

const cache={};

const expensive=(num)=>{
    let sum=0;
    for(let i=0;i<100000000;i++){
        sum+=num;
    }
    return sum;

   
}

const getExpensive=(num)=>{
  if(!cache[num]){
    let cachedNum=expensive(num);
    cache[num]=cachedNum;
    return cachedNum;
  }

  return cache[num]; 
}

console.time("first call(slow)")
console.log(getExpensive(300));
console.timeEnd("first call(slow)")


console.time("second call(fast)")
console.log(getExpensive(300));
console.timeEnd("second call(fast)")


console.time("Third call(slow)")
console.log(getExpensive(400));
console.timeEnd("Third call(slow)")

console.time("Fourth call(fast)")
console.log(getExpensive(400));
console.timeEnd("Fourth call(fast)")