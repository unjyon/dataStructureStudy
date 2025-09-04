class BinarySearchTree {
  root = null;

  //insert 함수에 있는 재귀 함수 만들기
  #insert(node, value) {
    if (node.value === value) {
      throw new Error("이미 존재하는 값입니다.");
    } else if (node.value > value) {
      // 왼쪽 값이 있으면
      if (node.left) {
        this.#insert(node.left, value);
      } else {
        node.left = new Node(value);
      }
    } else {
      // 오른쪽 값이 있으면
      if (node.right) {
        this.#insert(node.right, value);
      } else {
        node.right = new Node(value);
      }
    }
  }
  // 값 넣기
  // 값이 작으면 왼쪽에, 크면 오른쪽에
  insert(value) {
    // 어떤 값을 넣으려 할 때, 일단 어디에 넣을지 모르겠다.
    // 그래서 왼팔, 오른팔에게 맡긴다.
    // 근데 만약 왼팔 오른팔이 없으면 거기다가 넣는다.
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.#insert(this.root, value);
      //숙제: 같은 값을 넣은 경우 에러처리(alert, throw)
    }
  }
  #search(node, value) {
    if (node.value > value) {
      if (!node.left) {
        return null;
      }
      if (node.left.value === value) {
        // 왼팔의 값을 찾았을 때
        return node.left;
      }

      return this.#search(node.left, value);
    } else {
      if (!node.right) {
        return null;
      }
      if (node.right.value === value) {
        // 오른팔의 값을 찾았을 때
        return node.right;
      }
      // 그렇지 않으면 탐색
      return this.#search(node.right, value);
    }
  }
  // 값 찾기 - 수정하기는 search에서 활용
  search(value) {
    // 어떤 값을 찾으려 할때, 일단 어디에 있는지 모르겠다.
    // 그래서 왼팔 오른팔한테 맡긴다.
    // 찾으면 그 노드를 return, 못찾으면 null을 return
    if (!this.root) {
      return null;
    }
    if (this.root.value === value) {
      return this.root;
    }
    return this.#search(this.root, value);
  }

  //값 삭제
  remove(value) {}
}

class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}

const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(10);
bst.insert(3);
bst.insert(1);
bst.insert(14);
bst.insert(6);
bst.insert(7);
bst.insert(4);
bst.insert(14);

console.log(bst.insert(4));
