let arr = [];
const MAX=100, MIN=1;

for(let i=0; i<100; ++i){
    arr[i] = Math.floor(Math.random()*(MAX-MIN+1)+MIN);

}

let arr2 = arr.filter(e => e%2 === 0);
console.log(arr2)