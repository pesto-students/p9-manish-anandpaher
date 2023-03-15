class Node {
  constructor(element) {
    this.element = element;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNode(element) {
    let node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
    this.size++;
  }

  printLinkedList(linkedlist) {
    let temp = linkedlist;
    let printedList = [];
    while (temp !== null) {
      printedList.push(temp.element);
      temp = temp.nextNode;
    }
    console.log(printedList);
  }

  reverseLinkedList() {
    let prevNode = null;
    let current = this.head;
    let nextNode = null;

    while (current !== null) {
      nextNode = current.nextNode;
      current.nextNode = prevNode;
      prevNode = current;
      current = nextNode;
    }
    this.printLinkedList(prevNode);
  }
}

let ll = new LinkedList();

ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.addNode(4);
ll.addNode(5);
ll.addNode(6);

console.log("Original Linked list");
ll.printLinkedList(ll.head);
console.log("Reverse Linked list");
ll.reverseLinkedList();
