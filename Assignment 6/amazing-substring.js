/*Amazing Subarrays
You are given a string S, and you have to find all the amazing substrings of S.
An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).*/

function findAmazingSubstrings(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    let substrings = [];

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            // Count substrings starting from this vowel
            count += str.length - i;
            // Add substrings to array
            for (let j = i; j < str.length; j++) {
                substrings.push(str.substring(i, j + 1));
            }
        }
    }

    return { 
        count: count % 10003,
        substrings: substrings 
    };        

}

let str = "ABEC";
let output = findAmazingSubstrings(str);
console.log("Amazing-substrings:", output.substrings); 
console.log("Count:", output.count); 
//output:Amazing-substrings: [ 'A', 'AB', 'ABE', 'ABEC', 'E', 'EC' ]
//       Count:6 


