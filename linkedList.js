//1. 숙제 : next 아닌 이전것 prev
//2. 숙제 : O(n) 을 O(1) 로 변경하기 (힌트: tail)

class LinkedList {
  //   length = 0; 부분을 constructor로 쓰는 경우 아래와 같은 문법임
  //   constructor(length) {
  //     this.length = this.length;
  //   }
  length = 0;
  // 첫 시작이기에 head 는 null
  // 여기서 head 는 const ll 임
  head = null;
  tail = null;
  add(value) {
    if (this.head) {
      // tail을 이용해서 O(1)로 개선
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    } else {
      // head가 비어있을때
      this.head = new Node(value);
      this.tail = this.head; // tail도 head와 같은 노드를 가리키도록 설정
    }
    this.length++;
    return this.length;
  }
  search(index) {
    return this.#search(index)[1]?.value; // #search 함수의 두번째 값(current)의 벨류가 있으면 리턴
  }

  searchPrev (index) {
    return this.#search(index)[0]?.value;
  }
  // 이 함수는 내부에서만 사용하기 위해 # 을 붙여줌
  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    // prev 는 이전 노드, current 는 현재 노드를 리턴
    return [prev, current];
  }
  remove(index) {
    // 구조분해 할당
    const [prev, current] = this.#search(index);
    if (prev && current) {
      if (!current.next) {
        // 마지막 노드를 삭제하는 경우
        prev.next = null;
        this.tail = prev;
      } else {
        prev.next = current.next;
        current.next.prev = prev;
      }
      this.length--;
      return this.length;
    } else if (current) {
      // index가 0일때 (head를 삭제하는 경우)
      this.head = current.next;
      // head가 null이 되면 tail도 null로 설정
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return this.length;
    } 
    // 삭제하고자 하는 대상이 없을 때
    // 아무것도 안함
  }
}
class Node {
  
  // 외부에서 전달 받을 값은 constructure 구조로 써야 함
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
console.log(ll.searchPrev(4)); //4
ll.remove(4);
console.log(ll.search(4)); // undefined
console.log('hi')