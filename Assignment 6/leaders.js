/*Leaders in an array
  Given an integer array A containing N distinct integers, you have to find all the leaders in array A. An element is a leader if it is strictly greater than all the elements to its right side.
  NOTE: The rightmost element is always a leader.*/

  function countLeaders(arr){
    let N=arr.length;
    let max=arr[N-1];  //(last element be the maximum element/leader element)
    let cL=1;          // (cL is the count of leader element,last Element be maximum element so initialize to 1)
    
    for(let i=N-2; i>=0; i--)
    {
    if(arr[i]>max){
      max=arr[i];
        cL++;
    } 
  }
  return cL
}
let arr1=[16,17,4,3,5,2];
console.log(countLeaders(arr1));
//output:3

let arr2=[5,4];
console.log(countLeaders(arr2));
//output:2
    