//1. Design and implement Linked list with different operations//

// Define Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Define LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //a. Insert a node at a given position
    insert(node, pos) {
        if (pos < 0 || pos > this.size) {
            console.log('Invalid position');
        }
        if (pos === 0) {
            // Insert at the beginning
            node.next = this.head;
            this.head = node;
        } else {
            // Find the node before the desired position
            let current = this.head;
            for (let i = 0; i < pos - 1; i++) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        }
        this.size++;
    }

     //get size
     getSize(){
        return this.size;
    }

    //b. Delete a node at a given position
    delete(pos) {
        if (pos < 0 || pos >= this.size) {
            throw new Error('Invalid position');
        }
        if (pos === 0) {
            // Delete the head node
            this.head = this.head.next;
        } else {
            // Find the node before the position
            let current = this.head;
            for (let i = 0; i < pos - 1; i++) {
                current = current.next;
            }
            current.next = current.next.next;
        }
        this.size--;
    }

    //c. Print all elements in the linked list
    printAll() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current=current.next;
        }
    }

    //d. Append node at the end
    append(node) {
        if (this.size === 0) {
            this.head = node;
        } else {
            // Traverse to the end of the list
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //e. Prepend node at the front
    prepend(node) {
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    //f. Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}


let list = new LinkedList();

// Append nodes at the end
list.append(new Node(1));
list.append(new Node(2));
list.append(new Node(3));

// Print all elements
console.log("Original list:");
list.printAll();

//get size of LL
let size= list.getSize();
console.log("Size of the linked list",size);
/*output:Original list:
1
2
3
Size of the linked list 3*/


// Insert a node at position 1
let newNode = new Node(10);
list.insert(newNode, 1);

// Print all elements
console.log("\nList after inserting 10 at position 1:");
list.printAll();
/*output:List after inserting 10 at position 1:
1
10
2
3*/

// Delete a node at position 2
list.delete(2);

// Print all elements
console.log("\nList after deleting node at position 2:");
list.printAll();
/*output:List after deleting node at position 2:
1
10
3*/

// Prepend a node at the front
let frontNode = new Node(0);
list.prepend(frontNode);

// Print all elements
console.log("\nList after prepending 0 at the front:");
list.printAll();
/*output:List after prepending 0 at the front:
0
1
10
3*/

// Reverse the linked list
list.reverse();

// Print all elements
console.log("\nList after reversing the linked list:");
list.printAll();
/*output:List after reversing the linked list:
3
10
1
0*/
