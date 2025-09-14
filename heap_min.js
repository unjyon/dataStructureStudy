export class MinHeap {
    arr = [];
  
    #reheapUp(index) {
      // 부모가 -가 되면 안되므로
      // 여기에서 0은 root 이다.
      if (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.arr[index] < this.arr[parentIndex]) {
          // 값 바꾸기
          const temp = this.arr[index];
          this.arr[index] = this.arr[parentIndex];
          this.arr[parentIndex] = temp;
          this.#reheapUp(parentIndex);
        }
      }
    }
    // insert 는 보통 재귀를 사용한다.
    // heap 은 O(log n)인데, 보통 O(log n)은 재귀를 사용한다.
    insert(value) {
      const index = this.arr.length;
      this.arr[index] = value; // arr 의 가장 마지막에 추가
      this.#reheapUp(index); // 여기에서 부모와 자식의 값을 비교해서 위치를 변경하는 재귀 함수를 사용한다.
    }
  
  #reheapDown(index) {
    const leftIndex = index * 2 + 1;
    // this.arr.length 보다 크거나 같으면 자식이 없다는 것
    if (leftIndex < this.arr.length) {
      const rightIndex = index * 2 + 2;
      const smaller = this.arr[leftIndex] < this.arr[rightIndex] ? leftIndex : rightIndex;
      // 자식보다 크면 자식과 바꾸기
      if (this.arr[index] > this.arr[smaller]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[smaller];
        this.arr[smaller] = temp;
        this.#reheapDown(smaller);
      }
    }
  }
  
    remove() {
      //root만 제거
      if (this.arr.length === 0) {
        return false;
      }
      if (this.arr.length === 1) {
          return this.arr.pop();
      }
      const root = this.arr[0];
      this.arr[0] = this.arr.pop();
      this.#reheapDown(0);
      return root;
    }
    sort () {
      // 힙정렬
      const sortedArray = [];
      while (this.arr.length > 0) {
          sortedArray.push(this.remove());
      }
      return sortedArray;
    }
    search(value) {
      for (let i = 0; i < this.arr.length; i++) {    
        if (this.arr[i] === value) {
          return i;
        }
      }
      return null;
    }
    update(value, newValue) {
      const index = this.search(value);
      if (index === null) {
        return false;
      }
      this.arr[index] = newValue;
      // leaf 가 아닌 노드부터 root 까지 for문으로 순회해서 heapify
      for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) { // O(1/2n)
        this.#heapify(i); // O(1)
    }
    }
    // 특정값 삭제
    removeValue(value) {
      const index = this.search(value);
      if (index === null) {
        return false;
      }
      this.arr.splice(index, 1); 
      for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) { // O(1/2n)
        this.#heapify(i); // O(1)
      } 
    }
  
  #heapify(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    //(this.arr[leftIndex] || Infinity) undefined 일때 Infinity로 초기화
    const smaller = (this.arr[leftIndex] || Infinity) < (this.arr[rightIndex] || Infinity)
        ? leftIndex : rightIndex;
    console.log(index, this.arr[index], this.arr[smaller]);

    // 자기 자식중에 더 작은애보다 내가 크면 바꿔주기
    if (this.arr[index] > this.arr[smaller]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[smaller];
        this.arr[smaller] = temp;
        this.#heapify(smaller);
    }
  }
  }
  
  const heap = new MinHeap();
  
  heap.insert(8);
  heap.insert(19);
  heap.insert(23);
  heap.insert(32);
  heap.insert(45);
  heap.insert(56);
  heap.insert(78);
//   console.log(heap.sort());
// heap.update(23, 90);
  heap.removeValue(32);
  heap;