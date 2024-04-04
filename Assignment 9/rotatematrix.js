/*Q8. Rotate Matrix
Problem Description
You are given a n x n 2D matrix A representing an image.
Rotate the image by 90 degrees (clockwise).*/

function rotateMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    // Transpose the matrix
    let transposedMatrix = [];
    for (let i = 0; i < cols; i++) {
        transposedMatrix.push([]);
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }
    
    // Reverse each row to rotate the matrix clockwise to get rotate matrix
    for (let i = 0; i < cols; i++) {
        transposedMatrix[i].reverse();
    }
    
    return transposedMatrix;
}

let matrix1=[
    [1, 2],
    [3, 4]
];
console.log(rotateMatrix(matrix1));
//output:[ [ 3, 1 ], [ 4, 2 ] ]

let matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotateMatrix(matrix2));
//output:[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]



