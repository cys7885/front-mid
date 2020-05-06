let arr = [];
const MAX=100, MIN=1;

function callback(a){
    let count = 0;
    if(a % 2 ===0)
        count += 1;
}

for(let i=0; i<100; ++i){
    arr[i] = Math.floor(Math.random()*(MAX-MIN+1)+MIN);

}

arr.reduce(callback);