/*Special Index
 Problem Description
 Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.*/

 function countIndices(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let evenSum = 0;
        let oddSum = 0;
        
        // Calculate sum of even-indexed and odd-indexed elements
        for (let j = 0; j < arr.length; j++) {
            if (j % 2 === 0) {
                evenSum += arr[j];
            } else {
                oddSum += arr[j];
            }
        }
        
        // If removing the current element balances the sums, increment count
        if (i % 2 === 0) {
            if ((evenSum - arr[i]) === oddSum) {
                count++;
            }
        } else {
            if (evenSum === (oddSum - arr[i])) {
                count++;
            }
        }
    }
    
    return count;
}

let arr = [2,1,6,4];
console.log(countIndices(arr));//output:1

let arr1=[1,1,1];
console.log(countIndices(arr1));//output:2