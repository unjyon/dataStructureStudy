class LinkedList {
  //   length = 0; 부분을 constructor로 쓰는 경우 아래와 같은 문법임
  //   constructor(length) {
  //     this.length = this.length;
  //   }
  length = 0;
  // 첫 시작이기에 head 는 null
  // 여기서 head 는 const ll 임
  head = null;

  add(value) {
    if (this.head) {
      // head 의 값이 있을 경우 new Node 에 값 추가
      // this.head.next = new Node(value);
      // 문제는 그 다음 값이 들어 오면 아래와 같아짐
      // this.head.next.next = new Node(value);

      // 이럴때 반복문을 사용하면 좋음
      // current 를 this.head 로 선언해주고
      let current = this.head;
      // 다음 current.next 가 없을때까지 계속 들어간다
      while (current.next) {
        current = current.next;
      }
      // 마지막에 없는 데에다가 연결해준다.
      current.next = new Node(value);
    } else {
      // head 가 비어있을때
      this.head = new Node(value);

      // 쓸모있는 데이터를 반환(return) 해 주는 것이 좋음
    }
    this.length++;
    return this.length;
  }
  search(index) {
    // count 0으로 선언
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return current?.value;
  }
  remove(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    prev.next = current.next;
    this.length--;
    return this.length;
  }
}
class Node {
  next = null;
  // 외부에서 전달 받을 값은 constructure 구조로 써야 함
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();
ll.length;
ll.add(1); // 1
ll.add(2); // 2
ll.add(3); // 3
ll.add(4); // 4
ll.add(5); // 5
ll.add(6); // 6
console.log(ll.search(6)); // undefined
ll.remove(4); // 5
console.log(ll.search(4)); // 6
ll.remove(4);
console.log(ll.search(4)); // undefined
