class Tree {
  constructor(value) {
    this.root = new Node(value);  
  } 
}

class Node {
  children = [];
  constructor(value) {
    this.value = value;
  }

  push(value) {
    // 항상 new Node 로 푸시해야 자식도 다시 children 을 가질 수 있다.
    this.children.push(new Node(value));
  }
}

const tree = new Tree(50);

tree.root.push(25);
tree.root.push(75);
tree.root.children[0].pusj(12);
tree.root.children[0].pusj(37);
tree.root.children[1].pusj(62);
tree.root.children[1].pusj(87);
