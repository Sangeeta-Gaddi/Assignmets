/* Q6. Matrix Transpose
Clearly after converting rows to column and columns to rows we get transpose of matrix*/

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    let transposedMatrix = [];
    for (let i = 0; i < cols; i++) {
        transposedMatrix.push([]);
    }
    
    // Fill the transposed matrix with values from the original matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }
    
    return transposedMatrix;
}

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(transposeMatrix(matrix1));
//output:[ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] 

let matrix2 = [
    [1, 2],
    [1, 2],
    [1, 2]
];
console.log(transposeMatrix(matrix2));
//output:[ [ 1, 1, 1 ], [ 2, 2, 2 ] ]

