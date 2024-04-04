/* Q5. Matrix Subtraction
Problem Description
You are given two integer matrices A and B having same size(Both having same number of rows (N) and columns (M). You have to subtract matrix B from A and return the resultant matrix. (i.e. return the matrix A - B).*/

function subtractMatrices(A, B) {
    let rows = A.length;
    let columns = A[0].length;

    // Initialize result matrix with zeros
    let result = [];
    for (let i = 0; i < rows; i++) {
        result.push([]);
        for (let j = 0; j < columns; j++) {
            result[i][j] = A[i][j] - B[i][j];
        }
    }
    
    return result;
}

let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

console.log(subtractMatrices(A, B));
//output:[ [ -8, -6, -4 ], [ -2, 0, 2 ], [ 4, 6, 8 ] ]


A1 = [[1, 1]]
 
B1 = [[2, 3]] 
console.log(subtractMatrices(A1, B1));
//output:[ [ -1, -2 ] ]
