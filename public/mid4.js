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

let count = arr.filter(e => e % 2 ==0).length;

console.log(count);