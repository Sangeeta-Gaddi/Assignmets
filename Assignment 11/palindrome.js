/*Check Palindrome
Problem Description
Write a recursive function that checks whether string A is a palindrome or Not.
Return 1 if the string A is a palindrome, else return 0.
Note: A palindrome is a string that's the same when read forward and backward.*/

function isPalindrome(str) {
    // Base case (if the string has 0 or 1 characters, it's a palindrome)
    if (str.length <= 1) {
      return 1;
    }
    
    // Check if the first and last characters are the same
    if (str[0] === str[str.length - 1]) {
      // Recursively check the substring without the first and last characters
      return isPalindrome(str.slice(1, -1));
    } else {
      return 0;
    }
  }
  
  console.log(isPalindrome("naman"));
  //output:1

  console.log(isPalindrome("strings"));
  //output:0