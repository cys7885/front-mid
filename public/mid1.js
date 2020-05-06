let arr = [];
const MAX=100, MIN=1;

for(let i=0; i<100; ++i){
    arr[i] = Math.floor(Math.random()*(MAX-MIN+1)+MIN);
}

for(let i=0; i<100; ++i){
    if(arr[i] % 10 > 5 && arr[i] % 10 < 9)
        arr.splice(i, 1);
}
console.log(arr);
