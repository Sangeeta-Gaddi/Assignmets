//1. Determine if a string/number is a palindrome.

function isPalindrome(input){

    let str=input.toString().toLowerCase().replace(/[^a-z0-9]/g,''); 

    let start=0;
    let end=str.length-1;

while(start<end){
    if(str[start]!==str[end]){
        return false;;
    }

    start++;
    end--;
}
return true;

}

console.log(isPalindrome("Racecar"));//output:true
console.log(isPalindrome((12321)));//output:true
console.log(isPalindrome("Sangeeta"));//output:false
console.log(isPalindrome(12345));//output:false
console.log(isPalindrome("Aman!,nama!"))//output:true


