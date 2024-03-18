/*You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).*/

function findSumInRange(arr, ranges) {
    // Create cumulative sum array
    let cumulativeSum = [0];
    for (let i = 0; i < arr.length; i++) {
        cumulativeSum[i + 1] = cumulativeSum[i] + arr[i];
    }

    // Calculate sum for each range
    let result = [];
    for (let i = 0; i < ranges.length; i++) {
        let start = ranges[i][0];
        let end = ranges[i][1];
        result.push(cumulativeSum[end + 1] - cumulativeSum[start]);
    }

    return result;
}

let arr = [1,2,3,4,5];
let ranges = [[0, 3], [1,2]];
console.log(findSumInRange(arr, ranges));//output:[10,5]

let arr1=[2,2,2];
let range1=[[0,0],[1,2]];
console.log(findSumInRange(arr1, range1));//output:[2,4]