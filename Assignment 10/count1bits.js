/* Number of 1 Bits
Problem Description
Write a function that takes an integer and returns the number of 1 bits present in its binary representation.*/

function countonebits(num)
{
    let count = 0;
    while(num>0){
        if(num & 1){
            count++;
        }
        num>>=1;
    }
    return count;
}

num1=11;
console.log(countonebits(num1));

num2=6;
console.log(countonebits(num2));