/* Add Binary Strings
Problem Description
Given two binary strings A and B. Return their sum (also a binary string).*/

function addBinarystrings(A, B) {
    // Convert binary strings to decimal integers
    let num1 = parseInt(A, 2);
    let num2 = parseInt(B, 2);
    
    let sum = num1 + num2;
    
    // Convert sum back to binary string
    return sum.toString(2);
}

let A1 = "100";
let B1 = "11";
console.log("Sum of binary strings:", addBinarystrings(A1, B1)); 
//output:Sum of binary strings: 111

let A2 = "110";
let B2 = "10";
console.log("Sum of binary strings:", addBinarystrings(A2, B2)); 
//output:Sum of binary strings: 1000