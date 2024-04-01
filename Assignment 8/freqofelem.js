//5 How do you get matching elements in a integer array. Find the frequency of repeated element.

function findRepeatedElements(arr) {
    let counts = {}; 
    
    // Count occurrences of each element in the array
    arr.forEach(element => {
        counts[element] = (counts[element] || 0) + 1; 
    });
    

    let repeatedElements = []; 
    
    // Iterate over the counts object
    for (let num in counts) {
        if (counts[num] > 1) {
            repeatedElements.push({ element: num, frequency: counts[num] });
        }
    }
    
    return repeatedElements; 
}

let arr = [1, 2, 3, 4, 1, 2, 3, 2, 4];
let repeatedElements = findRepeatedElements(arr);
console.log("Repeated elements and their frequencies:", repeatedElements);
/*output:Repeated elements and their frequencies: [
  { element: '1', frequency: 2 },
  { element: '2', frequency: 3 },
  { element: '3', frequency: 2 },
  { element: '4', frequency: 2 }
]*/
