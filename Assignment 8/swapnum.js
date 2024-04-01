//8 How would you swap two nubers without using a third variable.

function swapnumbers(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
     return[a,b];
}

let a=5;
let b=10;

[a,b]=swapnumbers(a,b);

console.log("a:", a);
console.log("b:", b);
/*output:a: 10
         b: 5*/