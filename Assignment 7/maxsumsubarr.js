/* Max Sum Contiguous Subarray
   Problem Description
   Find the maximum sum of contiguous non-empty subarray within an array A of length N.*/

   function findMaxSubarraySum(arr) {
    let maxSum = Number.MIN_SAFE_INTEGER; // Initialize maxSum to the smallest possible integer value
    let N = arr.length;

    for (let L = 0; L < N; L++) {
        for (let R = L; R < N; R++) {
            let currentSubarraySum = 0; // Reset currentSubarraySum for each subarray
            for (let i = L; i <= R; i++) {
                currentSubarraySum += arr[i]; // Calculate sum of current subarray
            }
            maxSum = Math.max(maxSum, currentSubarraySum); 
        }
    }

    return maxSum;
}

let arr = [1, 2, 3, 4, -10];
console.log(findMaxSubarraySum(arr));
//output:10

let arr1 = [-2,1,-3,4,-1,2,1,-5,4];
console.log(findMaxSubarraySum(arr1));
//output:6