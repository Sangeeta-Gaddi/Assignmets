/*Special Subsequences "AG"
  Problem Description
  You have given a string A having Uppercase English letters.
  You have to find how many times subsequence "AG" is there in the given string.*/

  function AGsubsequences(str) {
    let countAG = 0;
    let countA = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            countA++;
        } else if (str[i] === 'G') {
            countAG =countAG+countA;
        }
    }

    return countAG;
}
let str = "ABCGAG";
console.log(AGsubsequences(str));
//output:3

let str1 = "GAB";
console.log(AGsubsequences(str1));
//output:0