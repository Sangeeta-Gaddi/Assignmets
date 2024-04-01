//4 How to calculate number of vowels and consonants in a string.

function countVowelsAndConsonants(str) {
    
    str = str.toLowerCase();
       
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    
    let vowelCount = 0;
    let consonantCount = 0;
    
    
    for (let char of str) {
        // Check if the character is a letter
        if (/[a-z]/.test(char)) {
            // If the character is a vowel, increment the vowel counter
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                // If the character is a consonant, increment the consonant counter
                consonantCount++;
            }
        }
    }
    
    
    return { 
        vowels: vowelCount, 
        consonants: consonantCount 
    };
}

let str = "Sangeeta";
let counts = countVowelsAndConsonants(str);
console.log("Vowels:", counts.vowels); // Output: 4
console.log("Consonants:", counts.consonants); // Output: 4