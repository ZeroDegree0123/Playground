class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node 
    insertFirst(data) {
        this.head = new Node(data, this.head);
        // increments size of list
        this.size++
    }

    // Insert last node 
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, make it the head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
    
            while (current.next) {
                current = current.next;
            }

            current.next = node; 
        }
        // increments size of list
        this.size++
    }

    // INSERT AT INDEX
    insertAt(data, index) {
        // If index is out of range
        if (index > 0 && index > this.size) return;

        // If first index/Head
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
            // this.insertFirst(data);
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;
        
        while(count < index) {
            // Node before index 
            previous = current; 
            count++;
            // Node after index
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // GET AT INDEX
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if (count == index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }

        return null;
    }


    // REMOVE AT INDEX
    removeAt(index) {
        if (index > 0 && index > this.size) return;

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }
    // CLEAR LIST
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
     }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
// ll.insertAt(500, 2);
// ll.removeAt(2);

ll.printListData();
// ll.getAt(0)
