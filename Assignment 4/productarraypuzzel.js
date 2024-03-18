/*Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator*/

function productarray(arr) {
    let n = arr.length;
    let leftProduct = new Array(n);
    let rightProduct = new Array(n);
    let product = new Array(n);

    // Calculate left products
    leftProduct[0] = 1;
    for (let i = 1; i < n; i++) {
        leftProduct[i] = leftProduct[i - 1] * arr[i - 1];
    }

    // Calculate right products
    rightProduct[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProduct[i] = rightProduct[i + 1] * arr[i + 1];
    }

    // Calculate product array
    for (let i = 0; i < n; i++) {
        product[i] = leftProduct[i] * rightProduct[i];
    }

    return product;
}

let arr1 = [1, 2, 3, 4, 5];
console.log(productarray(arr1));//output:[ 120, 60, 40, 30, 24 ]

let arr2 = [5, 1, 10, 1];
console.log(productarray(arr2));//output:[ 10, 50, 5, 50 ]