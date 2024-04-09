/* Reverse Bits
Problem Description
Reverse the bits of an 32 bit unsigned integer A.*/

function reverseBits(A) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (A & 1);
        A >>= 1;
    }
    return result >>> 0; // Convert back to unsigned integer
}

let input1 = 0;
console.log(reverseBits(input1)); 
//output:0

let input2 = 3;
console.log(reverseBits(input2)); 
//output:3221225472
