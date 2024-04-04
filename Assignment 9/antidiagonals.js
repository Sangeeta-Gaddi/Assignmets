/* Q2. Anti Diagonals
Problem Description
Give a N * N square matrix A, return an array of its anti-diagonals. */

function calculateAntiDiagonals(matrix) {
    let size = matrix.length; // Since it's a square matrix, we only need to get the length once.
    let result = [];

    // Initialize result array
    for (let i = 0; i < 2 * size - 1; i++) {
        result.push([]);
    }

    // Fill result array with anti-diagonals
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {    
            result[i + j].push(matrix[i][j]);
        }
    }

    // Fill empty positions with zeroes
    for (let i = 0; i < result.length; i++) {
        while (result[i].length < size) {
            result[i].push(0);
        }
    }

    return result;
}

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(calculateAntiDiagonals(matrix1));
//output:[ [ 1, 0, 0 ], [ 2, 4, 0 ], [ 3, 5, 7 ], [ 6, 8, 0 ], [ 9, 0, 0 ] ]

let matrix2 = [
    [1, 2],
    [3, 4]
];
console.log(calculateAntiDiagonals(matrix2));
//output:[ [ 1, 0 ], [ 2, 3 ], [ 4, 0 ] ]