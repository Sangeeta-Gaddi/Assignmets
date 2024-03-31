/* Counting Subarrays Easy
Problem Description
Given an array A of N non-negative numbers and a non-negative number B,
you need to find the number of subarrays in A with a sum less than B.*/

function countsubarrayssumlessthanB(A, B) {
    let count = 0;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < A.length; right++) {
        sum += A[right];

        while (sum >= B) {
            sum -= A[left];
            left++;
        }

        count += right - left + 1;
    }

    return count;
}

let A = [2, 5, 6];
let B = 10;
console.log(countsubarrayssumlessthanB(A, B));
//output:4

let A2 = [1, 11, 2, 3, 15];
let B2 = 10;
console.log(countsubarrayssumlessthanB(A2, B2));
//output:4