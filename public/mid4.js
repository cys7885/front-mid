let arr = [];
const MAX=100, MIN=1;

for(let i=0; i<100; ++i){
    arr[i] = Math.floor(Math.random()*(MAX-MIN+1)+MIN);
}
/*
let c = arr.reduce((a,b) => {
    let count = 0;
    if(a != undefined)
        if(a % 2 == 0)
            count++;
    else if(b % 2 == 0)
            count++;
})*/

let arr2 = arr.reduce((count,cur) => { 
    if(cur%2 == 0) count++ 
    return count},[]
);
console.log(arr2);