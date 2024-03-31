/* Maximum Subarray Easy
Problem Description
You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
But the sum must not exceed B.*/

function maxSubarraySum(A, B, C) {
    let maxSum = 0;

    for (let start = 0; start < A; start++) {
        let currentSum = 0;
        for (let end = start; end < A; end++) {
            currentSum += C[end];
            if (currentSum > B) {
                break;
            }
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }

    return maxSum;
}

let A = 5;
let B = 12;
let C = [2, 1, 3, 4, 5];
console.log(maxSubarraySum(A, B, C));
//output:12

let A1 = 3;
let B1 = 1;
let C1 = [2, 2, 2];
console.log(maxSubarraySum(A1, B1, C1));
//output:0