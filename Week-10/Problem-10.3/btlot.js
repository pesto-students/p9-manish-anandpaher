class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(val) {
    this.root = new Node(val);
  }

  levelOrder(root) {
    if (!root) return [];

    let result = [];
    let queue = [];

    queue.push(root);

    while (queue.length > 0) {
      let level = [];

      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let node = queue.shift();

        level.push(node.val);

        if (node.left) queue.push(node.left);

        if (node.right) queue.push(node.right);
      }

      result.push(level);
    }

    return result;
  }
}

const bt = new BinaryTree(3);
bt.root.left = new Node(9);
bt.root.right = new Node(20);
bt.root.right.left = new Node(15);
bt.root.right.right = new Node(7);

console.log(bt.levelOrder(bt.root));
