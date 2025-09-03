class BinarySearchTree {
  root = null;

    //insert 함수에 있는 재귀 함수 만들기
    #insert(node, value) { 

    }
  // 값 넣기
  // 값이 작으면 왼쪽에, 크면 오른쪽에
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
        }
        if (this.root.value > value) {
            // 루트 node 값이 작은 값이면
            // 아래 코드를 재귀로 구현하면 된다.
            // this.root.left = insert(value);
            this.#insert(this.root.left, value);
        } else { 
            // 루트 node 값이 큰 값이면
            // this.root.right = insert(value);
            this.#insert(this.root.right, value);
        }
    }
  }
  // 값 찾기 - 수정하기는 search에서 활용
  search(value) {}

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

bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);
bst.insert(10);
