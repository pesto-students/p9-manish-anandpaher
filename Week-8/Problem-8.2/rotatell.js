class Node {
  constructor(element) {
    this.element = element;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(N) {
    this.head = null;
    this.size = 0;
  }

  addNode(element) {
    if (this.size < N) {
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
  }

  printLinkedList() {
    let temp = this.head;
    let printedList = [];
    while (temp !== null) {
      printedList.push(temp.element);
      temp = temp.nextNode;
    }
    console.log(printedList);
  }

  rotateLinkedList(k) {
    let current = this.head;
    let count = 1;
    while (count < k && current != null) {
      current = current.nextNode;
      count++;
    }

    let secondElemnts = current;
    while (current.nextNode != null) {
      current = current.nextNode;
    }

    current.nextNode = this.head;
    this.head = secondElemnts.nextNode;
    secondElemnts.nextNode = null;

    this.printLinkedList();
  }
}

let N = 8;
let ll = new LinkedList(N);
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.addNode(4);
ll.addNode(5);
ll.addNode(6);
ll.addNode(7);
ll.addNode(8);
ll.addNode(9);

console.log("Original Linked list");
ll.printLinkedList();

let k = 4;
console.log("Roteted Linked list");
ll.rotateLinkedList(k);
