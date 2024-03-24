/*Bulbs
 Problem Description
 A wire connects N light bulbs.
 Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.
 Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.*/

function minSwitchesToTurnOnAllBulbs(bulbs) {
    let switches = 0;
    let state = 0; // Represents the current state of the bulbs
    let length = bulbs.length;//the length of input array

    for (let i = 0; i < length; i++) {
        if (bulbs[i] === state) {
            switches++;
            state = 1 - state; // Flip the state of the bulbs
        }
    }
    return switches;
}

let bulbs = [0, 1, 0, 1];
console.log(minSwitchesToTurnOnAllBulbs(bulbs)); //output:4

let bulbs2 = [1,1,1,1];
console.log(minSwitchesToTurnOnAllBulbs(bulbs2)); //output:0