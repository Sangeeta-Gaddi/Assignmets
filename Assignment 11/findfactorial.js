/* Find Factorial!
Problem Description
Write a program to find the factorial of the given number A using recursion.
Note: The factorial of a number N is defined as the product of the numbers from 1 to N.*/

function factorial(A){
    if(A === 0| A === 1){  //Base case(if A is neither 0 or 1,then returns 1,because factorial of o and 1 is 1)
        return 1;
    }else{
        return A * factorial(A-1); //recursive function calls itself until reaches the base case
    }
}

let A1 = 4;
console.log(factorial(A1));
//output:24

let A2 = 1;
console.log(factorial(A2));
//output:1