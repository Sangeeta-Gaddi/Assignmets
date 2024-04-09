/* Find Fibonacci - II
Problem Description
The Fibonacci numbers are the numbers in the following integer sequence.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation:
Fn = Fn-1 + Fn-2
Given a number A, find and return the Ath Fibonacci Number using recursion.*/

function Fibonacci(A) {
    if (A <= 1) {  //Base case:(if number 'A' is less than or equal to one returns 'A')
        return A;
    } else {
        return Fibonacci(A - 1) + Fibonacci(A - 2);//recursively calls this realtion
    }
}

console.log(Fibonacci(2));
//output:1

console.log(Fibonacci(9));
//output:34

