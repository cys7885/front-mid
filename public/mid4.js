let arr = [];
const MAX=100, MIN=1;

for(let i=0; i<100; ++i){
    arr[i] = Math.floor(Math.random()*(MAX-MIN+1)+MIN);
}

arr.reduce((a,b) => {
    let count = 0;
    if(a != undefined)
        if(a % 2 ==0)
            count++;
    console.log(a,b);
})
//arr.filter(e => e % 2 ==0);
/*
console.log(arr.reduce((e, b) => {
    let count = 0;
    if(e % 2 == 0) count++;
}));
*/

console.log(arr);