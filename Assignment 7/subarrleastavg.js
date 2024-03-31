/* Subarray with least average
Problem Description
Given an array of size N, find the subarray of size K with the least average.*/

function findLeastAvgsubarridx(arr, k) {
    let minAvg = Infinity;
    let minAvgIdx = -1;
    
    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        // Calculate sum of current subarray
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        let avg = sum / k;
        if (avg < minAvg) {
            minAvg = avg;
            minAvgIdx = i;
        }
    }
    return minAvgIdx;
}

let arr1 = [3, 7, 90, 20, 10, 50, 40];
let k1 = 3;
console.log(findLeastAvgsubarridx(arr1, k1)); 
//output:3

let arr2=[3, 7, 5, 20, -10, 0, 12]
let k2=2;
console.log(findLeastAvgsubarridx(arr2, k2)); 
//output:4
