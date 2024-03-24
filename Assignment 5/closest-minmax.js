/*Closest MinMax
 Problem Description
 Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array
 and at least one occurrence of the minimum value of the array.*/

 function minMaxSubarraySize(arr) {
    let minIndex = 0;
    let maxIndex = 0;
    let min = arr[0]; // Initialize min with the first element of the array
    let max = arr[0]; // Initialize max with the first element of the array

    for (let i = 1; i < arr.length; i++) { // Start loop from the second element
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
   //Maths.abs() is built-in function which returns the absolute values disregarding its sign(position in the array).
    let subarraySize = Math.abs(maxIndex - minIndex) + 1;
    return subarraySize;
}

let array1 = [1, 3, 2];
console.log(minMaxSubarraySize(array1)); //output:2

let array2 = [2,6,1,6,9];
console.log(minMaxSubarraySize(array2)); //output:3

