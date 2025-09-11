class Heap {
  arr = [];

  #reeapUp(index) {
    // 부모가 -가 되면 안되므로
    // 여기에서 0은 root 이다.
    if (index > 0) {
      const parrentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index] > this.arr[parrentIndex]) {
        // 값 바꾸기
        const temp = this.arr[index];
        this.arr[index] = this.arr[parrentIndex];
        this.arr[parrentIndex] = temp;
        this.#reeapUp(parrentIndex);
      }
    }
  }
  // insert 는 보통 재귀를 사용한다.
  // heap 은 O(log n)인데, 보통 O(log n)은 재귀를 사용한다.
  insert(value) {
    const index = this.arr.length;
    this.arr[index] = value; // arr 의 가장 마지막에 추가
    this.#reeapUp(index); // 여기에서 부모와 자식의 값을 비교해서 위치를 변경하는 재귀 함수를 사용한다.
  }

  remove() {
    //root만 제거
  }
  search(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === value) {
        return i;
      }
    }
    return null;
  }
}

const heap = new Heap();

heap.insert(8);
heap.insert(19);
heap.insert(23);
heap.insert(32);
heap.insert(45);
heap.insert(56);
heap.insert(78);
heap;
