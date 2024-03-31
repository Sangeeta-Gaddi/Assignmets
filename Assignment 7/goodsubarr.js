/* Good Subarrays Easy
Problem Description
Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
Your task is to find the count of good subarrays in A.*/

function countGoodSubarrays(A, B) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
    for (let j = i; j < A.length; j++) {
            sum += A[j];
 // Calculate the length of the current subarray
            let subarraylength = j - i + 1;
// Check if the subarray satisfies either of the conditions
            if ((subarraylength % 2 === 0 && sum < B) || (subarraylength % 2 !== 0 && sum > B)) {
                count++;
            }
        }
    }

    return count;
}

let A = [1, 2, 3, 4, 5];
let B = 4;
console.log(countGoodSubarrays(A, B));
//output:6

let A1 = [13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9];
let B1 = 65;
console.log(countGoodSubarrays(A1, B1));
//output:36