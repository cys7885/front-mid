let arr = [];
const MAX=100, MIN=1;

for(let i=0; i<100; ++i){
    let tmp = Math.floor(Math.random()*(MAX-MIN+1)+MIN);
    if(!(tmp % 10 > 5 && tmp % 10 < 9))
        arr.push(tmp);
}
console.log(arr);
