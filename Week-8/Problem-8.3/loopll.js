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

  detectLoop(x) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.nextNode !== null) {
        if (temp.element === x - 1 && temp.nextNode.element === x + 1) {
          return `Linked list contains a loop`;
        }
      }
      temp = temp.nextNode;
    }
    return `Linked list does not contain any loop`;
  }
}

let N = 3;
let ll = new LinkedList(N);
ll.addNode(1);
ll.addNode(3);
ll.addNode(4);

console.log("Original Linked list");
ll.printLinkedList();

let x = 2;
console.log(ll.detectLoop(x));
