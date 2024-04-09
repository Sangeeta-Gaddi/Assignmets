/* Interesting Array
Problem Description
You have an array A with N elements. We have two types of operation available on this array :
You have to determine whether it is possible to convert array A to size 1, containing a single element equal to 0 after several splits and/or merge?*/

function interestingArray(arr) {
    let oddelementscount = 0;

        for (let i=0;i<arr.length;i++) {
            if (arr[i] % 2 !== 0) {
                oddelementscount++;
            }
        }
        
    // If the number of odd elements is odd, it's not possible to make the array zero
    if (oddelementscount % 2 !== 0) {
        return "No";
    } else {
        return "Yes";
    }
}

let arr1 = [9, 17];
console.log(interestingArray(arr1)); 
// Output: Yes

let arr2=[1];
console.log(interestingArray(arr2));
//output:No

