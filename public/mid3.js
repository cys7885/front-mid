let a1 = [];

for(let i=0; i<3; ++i){
    a1[i] = [];
    for(let j=0; j<2; ++j){
        a1[i][j] = i*2+j;
    }
}
let a2 = JSON.parse(JSON.stringify(a1));
a1[0][0] = 100;
console.log(a1);
console.log(a2);