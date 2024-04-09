/* Print reverse string
Problem Description
Write a recursive function that takes a string, S, as input and prints the characters of S in reverse order.*/

function printReverse(str) {
    if (str === "") {
      return ""; // Base case: stop recursion when the string is empty
    } else {
      return printReverse(str.substring(1))+str.charAt(0); // Recursive call with substring excluding the first character and concatenates the first character of input string
    }
  }
  
  let str1 = "scaleracademy";
  console.log(printReverse(str1));
  //output:ymedacarelacs

  let str2 = "cool";
  console.log(printReverse(str2));
  //output:looc
