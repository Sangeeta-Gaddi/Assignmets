/*Sum of All Subarrays
Problem Description
You are given an integer array A of length N.
You have to find the sum of all subarray sums of A.
More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
A subarray sum denotes the sum of all the elements of that subarray.*/

function calculateSubarraySum(arr) {
    let sum = 0;
    let N = arr.length;
    for (let L = 0; L < N; L++) {
        for (let R = L; R < N; R++) {
            let subarraySum = 0;
            for (let i = L; i <= R; i++) {
                subarraySum += arr[i];
            }
            sum += subarraySum;
        }
    }
    return sum;
}

let arr = [1, 2, 3];
console.log(calculateSubarraySum(arr));
//output:20

let arr1 = [2, 1, 3];
console.log(calculateSubarraySum(arr1));
//output:19