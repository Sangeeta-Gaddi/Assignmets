/* Design and implement stack with below operations with array
a) push operation
b) pop operation
c) top operation*/ 

class Stack {
    constructor(capacity) {
        this.stack = [];
        this.capacity = capacity;
    }

    // Push operation
    push(element) {
        if (this.stack.length < this.capacity) {
            this.stack.push(element);
            console.log(`Pushed ${element} to stack.`);
        } else {
            console.log(`Stack is full. Cannot push ${element}.`);
        }
    }

    // Pop operation
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Cannot pop.");
            return null;
        } else {
            let poppedElement = this.stack.pop();
            console.log(`Popped ${poppedElement} from stack.`);
            return poppedElement;
        }
    }

    // Top operation: Returns the top element of the stack without removing it
    top() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        } else {
            let topElement = this.stack[this.stack.length - 1];
            console.log(`Top element is ${topElement}.`);
            return topElement;
        }
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Check if the stack is full
    isFull() {
        return this.stack.length === this.capacity;
    }
}

// Example usage
let capacity = 3; // Set the capacity limit for the stack
let stack = new Stack(capacity);

stack.push(10); 
stack.push(20); 
stack.push(30);
/*output:
Pushed 10 to stack.
Pushed 20 to stack.
Pushed 30 to stack.*/

stack.push(40); 
//output:Stack is full. Cannot push 40.

stack.pop(); 
//output:Popped 30 from stack

stack.top(); 
//output:Top element is 20

