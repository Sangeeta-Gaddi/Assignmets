/* Single Number
Problem Description
Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.*/

function singleNumber(array){
let object = {};

for (let i = 0; i < array.length; i++) {
 let num = array[i];
 object[num] = (object[num] || 0) + 1;
}


for (let num in object) {
if (object[num] === 1) {
   console.log("Integer that occurs once:",num);
}
}
}

let array1=[1,2,2,3,1];
singleNumber(array1);
//output:Integer that occurs once:3

let array2=[1,2,2];
singleNumber(array2);
//output:Integer that occurs once: 1