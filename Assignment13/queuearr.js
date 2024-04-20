/* Design and implement queues with below operations with array
a) enqueue operation
b) dequeue operation
c) front operation
d) tail operation*/

class Queue {
    constructor(capacity) {
        this.queue = [];
        this.capacity = capacity;
    }

    // Enqueue operation
    enqueue(element) {
        if (this.queue.length < this.capacity) {
            this.queue.push(element);
            console.log(`Enqueued ${element} to queue.`);
        } else {
            console.log(`Queue is full. Cannot enqueue ${element}.`);
        }
    }

    // Dequeue operation
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return null;
        } else {
            let dequeuedElement = this.queue.shift();
            console.log(`Dequeued ${dequeuedElement} from queue.`);
            return dequeuedElement;
        }
    }

    // Front operation
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        } else {
            let frontElement = this.queue[0];
            console.log(`Front element is ${frontElement}.`);
            return frontElement;
        }
    }

    // Tail operation
    tail() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        } else {
            let tailElement = this.queue[this.queue.length - 1];
            console.log(`Tail element is ${tailElement}.`);
            return tailElement;
        }
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Check if the queue is full
    isFull() {
        return this.queue.length === this.capacity;
    }
}

let capacity = 3; 
let queue = new Queue(capacity);

queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
/*output:
Enqueued 10 to queue.
Enqueued 20 to queue.
Enqueued 30 to queue.*/

queue.enqueue(40); 
//output:Queue is full. Cannot enqueue 40.

queue.dequeue(); 
//output: Dequeued 10 from queue

queue.front(); 
//output: Front element is 20

queue.tail(); 
//output:Tail element is 30
