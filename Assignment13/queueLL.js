/* Design and implement queues with below operations with your implemented linked list
a) enqueue operation 
b) dequeue operation
c) front operation
d) tail operation*/

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
        this.tail = null;
    }

    // Enqueue operation: Adds a new node to the end of the linked list
    enqueue(value) {
        const newNode = new ListNode(value);
        if (this.tail) {
            // Link the current tail node to the new node
            this.tail.next = newNode;
        } else {
            // If the list is empty, set the head to the new node
            this.head = newNode;
        }
        // Update the tail reference to the new node
        this.tail = newNode;

        console.log(`Enqueued ${value} to queue.`);
    }

    // Dequeue operation: Removes and returns the node at the beginning of the linked list
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return null;
        } else {
            const dequeuedValue = this.head.value;
            // Move the head reference to the next node
            this.head = this.head.next;

            // If the list becomes empty after dequeue, reset the tail to null
            if (!this.head) {
                this.tail = null;
            }

            console.log(`Dequeued ${dequeuedValue} from queue.`);
            return dequeuedValue;
        }
    }

    // Front operation: Returns the value of the node at the beginning of the linked list
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        } else {
            const frontValue = this.head.value;
            console.log(`Front element is ${frontValue}.`);
            return frontValue;
        }
    }

    // Tail operation: Returns the value of the node at the end of the linked list
    tailElement() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        } else {
            const tailValue = this.tail.value;
            console.log(`Tail element is ${tailValue}.`);
            return tailValue;
        }
    }

    // Check if the linked list is empty
    isEmpty() {
        return this.head === null;
    }
}

// Define the Queue class using the LinkedList
class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    // Enqueue operation
    enqueue(value) {
        this.linkedList.enqueue(value);
    }

    // Dequeue operation
    dequeue() {
        return this.linkedList.dequeue();
    }

    // Front operation
    front() {
        return this.linkedList.front();
    }

    // Tail operation
    tail() {
        return this.linkedList.tailElement();
    }

    // Check if the queue is empty
    isEmpty() {
        return this.linkedList.isEmpty();
    }
}

let queue = new Queue();

queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
/*output:
Enqueued 10 to queue.
Enqueued 20 to queue.
Enqueued 30 to queue.*/

queue.dequeue(); 
//output:Dequeued 10 from queue

queue.front(); 
//output:Front element is 20

queue.tail(); 
//output:Tail element is 30
