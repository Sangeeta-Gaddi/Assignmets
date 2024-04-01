//2 Find the number of occurances of a character in a string.

function countOccurrencesofchar(str, char) {
    
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      
      if (str[i] === char) {
        count++;
      }
    }
    
    return count;
  }
  
console.log(countOccurrencesofchar("Sangeeta","e"));//output:2
console.log(countOccurrencesofchar("Hello World","l"));//output:3
console.log(countOccurrencesofchar("Bootcamp","B"));//output:1
console.log(countOccurrencesofchar("Bootcamp","s"));//output:0
