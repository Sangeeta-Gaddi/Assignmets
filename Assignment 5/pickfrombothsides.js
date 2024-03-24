/* Pick from both sides!
 Problem Description
 You are given an integer array A of size N.
 You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.
 Find and return the maximum possible sum of the B elements that were removed after the B operations.*/

 
function maxsumpossible(A, B) {
    let maxSum = 0;

    // Calculate the maximum sum of elements removed from both sides
    for (let leftCount = 0; leftCount <= B; leftCount++) {
        let rightCount = B - leftCount;
       
        // Calculate the sum of elements removed from the left side
        let leftSum = 0;
        for (let i = 0; i < leftCount; i++) {
            leftSum += A[i];
        }

        // Calculate the sum of elements removed from the right side
        let rightSum = 0;
        for (let i = A.length - 1; i >= A.length - rightCount; i--) {
            rightSum += A[i];
        }

        // Update maxSum if the current sum is greater
        maxSum = Math.max(maxSum, leftSum + rightSum);
    }

    return maxSum;
}

let A = [5, -2, 3, 1, 2];
let B = 3;
console.log(maxsumpossible(A, B)); //output:8

let A1=[2, 3, -1, 4, 2, 1];
let B1=4;
console.log(maxsumpossible(A1, B1)); //output:9

