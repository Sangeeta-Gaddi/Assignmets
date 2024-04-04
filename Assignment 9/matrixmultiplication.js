/* Q4. Matrix Multiplication
Problem Description
You are given two integer matrices A(having M X N size) and B(having N X P). You have to multiply matrix A with B and return the resultant matrix. (i.e. return the matrix AB).*/

function multiplyMatrices(A, B) {
    let rowsA = A.length;
    let colsA = A[0].length;
    let rowsB = B.length;
    let colsB = B[0].length;
    
    if (colsA !== rowsB) {
        return "Matrices are not compatible for multiplication";
    }
    
    let result = [];
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += A[i][k] * B[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

let A = [
    [1, 2],
    [3, 4]
];

let B = [
    [5, 6],
    [7, 8]
];

console.log(multiplyMatrices(A, B));
//output:[ [ 19, 22 ], [ 43, 50 ] ]

A1 = [[1, 1]]
B1 = [[2],
     [3]]

console.log(multiplyMatrices(A1, B1));
//output:[ [ 5 ] ]