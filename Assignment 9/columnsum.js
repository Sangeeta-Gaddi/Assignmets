/* Q3. Column Sum
Problem Description
You are given a 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.*/

function columnSum(matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let sumofcolumns = [];

    for (let j = 0; j < columns; j++) {
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            sum += matrix[i][j];
        }
        sumofcolumns.push(sum);
    }
    return sumofcolumns;
}


let matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 2, 3, 4]
];

console.log(columnSum(matrix1));
//output:[ 15, 10, 13, 16 ]

