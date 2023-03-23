class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x) {
    this.s1.push(x);
  }

  pop() {
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }
}

const q = new Queue();
q.push(5);
q.push(1);
q.push(2);
q.push(1);
q.push(3);
q.push(2);
q.push(1);
q.push(4);
q.push(2);

console.log("Queue before pop operation");
console.log(q);

console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());

console.log("Queue after pop operation");
console.log(q);