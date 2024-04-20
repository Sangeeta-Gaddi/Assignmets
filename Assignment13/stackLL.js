/* Design and implement stack with below operations with your implemented linked list
a) push operation
b) pop operation
c) top operation*/

// Define a node for the linked list
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Define a linked list class
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a new node at the beginning (push operation)
    push(value) {
        let newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Remove and return the node at the beginning (pop operation)
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Cannot pop.");
            return null;
        } else {
            let poppedValue = this.head.value;
            this.head = this.head.next;
            console.log(`Popped ${poppedValue} from stack.`);
            return poppedValue;
        }
    }

    // Return the value of the node at the beginning (top operation)
    top() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        } else {
            let topValue = this.head.value;
            console.log(`Top element is ${topValue}.`);
            return topValue;
        }
    }

    // Check if the linked list is empty
    isEmpty() {
        return this.head === null;
    }
}

// Define the Stack class using the LinkedList
class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    // Push operation
    push(value) {
        this.linkedList.push(value);
        console.log(`Pushed ${value} to stack.`);
    }

    // Pop operation
    pop() {
        return this.linkedList.pop();
    }

    // Top operation
    top() {
        return this.linkedList.top();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.linkedList.isEmpty();
    }
}

// Example usage
let stack = new Stack();

stack.push(10); 
stack.push(20); 
stack.push(30); 
/*output:
Pushed 10 to stack.
Pushed 20 to stack.
Pushed 30 to stack.*/

stack.pop();
//output:Popped 30 from stack

stack.top(); 
//output:Top element is 20

