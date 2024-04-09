/* Sum of Digits!
Problem Description
Given a number A, we need to find the sum of its digits using recursion.*/

function sumOfDigits(n) {
    // Base case: if the number is 0, return 0
    if (n === 0) {
        return 0;
    }

    return n % 10 + sumOfDigits(Math.floor(n / 10));// Recursive case: add the last digit to the sum of the remaining digits
}

let n1 = 46;
console.log(sumOfDigits(n1));
//output:10

let n2 = 11;
console.log(sumOfDigits(n2));
//output:2