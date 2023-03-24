class Node {
    constructor(element) {
      this.element = element;
      this.nextNode = null;
    }
  }

  function   detectLoop (head) {
    let slow = this.head;
    let fast = this.head;
    let isLoop = false;
    while (slow && fast && fast.nextNode) {
      if (slow.nodeValue === fast.nodeValue) {
        isLoop = true;
        break;
      }
      slow = slow.nextNode;
      fast = fast.nextNode.nextNode;
    }
    return isLoop;
  }

  head = new Node(1);
  head.nextNode = new Node(3);
  head.nextNode.nextNode = new Node(4);

  console.log(detectLoop(head));