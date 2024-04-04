/* Q1. Add the matrices
Problem Description
You are given two matrices A & B of same size, you have to return another matrix which is the sum of A and B.*/

function addmatrices(A, B) {
    let rows = A.length;
    let columns = A[0].length;

    // Initialize result matrix with zeros
    let result = [];
    for (let i = 0; i < rows; i++) {
        result.push([]);
        for (let j = 0; j < columns; j++) {
            result[i][j] = A[i][j] + B[i][j];
        }
    }
    
    return result;
}

let A = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]];

let B = [[9, 8, 7],
         [6, 5, 4],
         [3, 2, 1]];

console.log(addmatrices(A, B));
//output:[ [ 10, 10, 10 ], [ 10, 10, 10 ], [ 10, 10, 10 ] ]

A1 = [[1, 2, 3],   
     [4, 1, 2],   
     [7, 8, 9]]  

B1 = [[9, 9, 7],   
     [1, 2, 4],   
     [4, 6, 3]]

console.log(addmatrices(A1, B1));
//output:[ [ 10, 11, 10 ], [ 5, 3, 6 ], [ 11, 14, 12 ] ]