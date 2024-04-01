//6 How do you reverse an array.

function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let arr = [1, 2, 3, 4, 5];
let revarr = reverseArray(arr);
console.log(revarr);
//output:[ 5, 4, 3, 2, 1 ]