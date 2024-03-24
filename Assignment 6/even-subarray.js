/*You are given an integer array A.
  Decide whether it is possible to divide the array into one or more subarrays of even length such that the first and last element of all subarrays will be even.
  Return "YES" if it is possible; otherwise, return "NO" (without quotes).*/

  function canDivideIntoEvenSubarrays(arr) {
    // Check if the array length is odd, return false if it is
    if (arr.length % 2 !== 0) {
        return "No";
    }

    // Check if the first and last elements are even
    if (arr[0] % 2 !== 0 || arr[arr.length - 1] % 2 !== 0) {
        return "No";
    }
    return "Yes";
}

let arr1 = [2, 4, 6, 8];
console.log(canDivideIntoEvenSubarrays(arr1)); 
// Output: Yes

let arr2 = [2, 4, 8, 7, 6];
console.log(canDivideIntoEvenSubarrays(arr2)); 
// Output: No