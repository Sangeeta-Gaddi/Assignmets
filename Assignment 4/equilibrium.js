//Find the equilibrium index of the given array//
//The equilibrium index of arrat is a an index such that the sum of elements at lower indexs is equal to the sum of elements at higrher indexes//

function equilibriumindex(arr) {
    let cumArr = [arr[0]];
    let equilibriumindices=[];

    // Calculate the cumulative array
    for (let i = 1; i < arr.length; i++) {
        cumArr[i] = cumArr[i - 1] + arr[i];
    }

    for (let i = 1; i < arr.length - 1; i++) { // Iterate through the array elements
        let LS = cumArr[i - 1]; // left sum
        let RS = cumArr[arr.length - 1] - cumArr[i]; // right sum

        if (LS === RS) {
            equilibriumindices.push(i);
        }
       
    }
    if (equilibriumindices.length === 0) {
        return -1; // Return -1 if no equilibrium index is found
    }

    return equilibriumindices; 
}

let arr1 = [-7,1,5,2,-4,3,0];
console.log(equilibriumindex(arr1));//output:[3]

 let arr = [1,2,3];
 console.log(equilibriumindex(arr));//output: -1