/*Given an integer array A of size N. In one second, you can increase the value of one element by 1.

Find the minimum time in seconds to make all elements of the array equal.*/

function minTimeToEquality(array) {
    let max = Math.max(...array);  //Find the max element in the array
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum = sum + array[i];   //Calculate the sum of whole array
    } 
    let n = array.length;
    return max * n - sum;   //calculates mintime to makes all elemets equal in array
}
let array1 = [2, 4, 1, 3, 2];
let result1 = minTimeToEquality(array1);
console.log(result1); //output:8

let array2 = [1, 5, 8, 6, 2];
let result2 = minTimeToEquality(array2);
console.log(result2);//output:18