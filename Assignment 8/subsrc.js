//7 Substring search, Given a string , find a pattern provide by user,if yes,print the index of the substring else print -1.

function searchsubstr(str, srcstr) {
    for (let i = 0; i <= str.length - srcstr.length; i++) {
        let match = true;
        for (let j = 0; j < srcstr.length; j++) {
            if (str[i + j] !== srcstr[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }
    return -1;
}

let str = "Hello world";
let srcstr="ello"
let index = searchsubstr(str, srcstr);
if (index !== -1) {
    console.log("The srcstr is found at index:", index);
} else {
    console.log("The srcstr is not found.");
}
//output:The srcstr is found at index: 1