// 연결리스트를 사용한 큐 구현
class Queue {
  length = 0;
  head = null;
  tail = null;

  enqueue(value) {
    // 새로운 노드를 생성하고 tail 뒤에 추가
    const newNode = new Node(value);
    
    if (!this.head) {
      // 큐가 비어있으면 head와 tail 모두 새 노드를 가리킴
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 큐에 요소가 있으면 tail의 next를 새 노드로 설정하고 tail을 업데이트
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
    return this.length;
  }

  dequeue() {
    // 큐가 비어있으면 null 반환
    if (!this.head) {
      return null;
    }

    // head의 값을 저장하고 head를 다음 노드로 이동
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    
    // 큐가 비어지면 tail도 null로 설정
    if (!this.head) {
      this.tail = null;
    }
    
    return value;
  }

  peek() {
    // 맨 앞의 값을 확인만 하고 제거하지 않음
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
const queue = new Queue();
console.log("큐가 비어있나요?", queue.isEmpty()); // true

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log("현재 큐 길이:", queue.length); // 6
console.log("맨 앞 값 확인:", queue.peek()); // 1

console.log("dequeue:", queue.dequeue()); // 1
console.log("dequeue:", queue.dequeue()); // 2
console.log("dequeue:", queue.dequeue()); // 3

console.log("현재 큐 길이:", queue.length); // 3
console.log("맨 앞 값 확인:", queue.peek()); // 4
