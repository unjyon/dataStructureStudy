class Stack {
  length = 0;
  head = null;

  push(value) {
    // 새로운 노드를 생성하고 head 앞에 추가
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.length;
  }

  pop() {
    // 스택이 비어있으면 null 반환
    if (!this.head) {
      return null;
    }

    // head의 값을 저장하고 head를 다음 노드로 이동
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  peek() {
    // 맨 위의 값을 확인만 하고 제거하지 않음
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 테스트
const stack = new Stack();
console.log("스택이 비어있나요?", stack.isEmpty()); // true

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

console.log("현재 스택 길이:", stack.length); // 6
console.log("맨 위 값 확인:", stack.peek()); // 6

console.log("pop:", stack.pop()); // 6
console.log("pop:", stack.pop()); // 5
console.log("pop:", stack.pop()); // 4

console.log("현재 스택 길이:", stack.length); // 3
console.log("맨 위 값 확인:", stack.peek()); // 3
