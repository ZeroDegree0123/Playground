const Linkedlist = require('./LinkedList')

const ll = new Linkedlist.fromValues(10, 20, 30, 40)
ll.print()
console.log(ll.getByIndex(0).value)

ll.insertAtIndex(2, 60)
ll.print();