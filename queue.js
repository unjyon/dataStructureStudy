export class Queue {
  arr = [];
  //queue의 전문적인 용어로 넣는 것을 enqueue라고 한다.
  enqueue(value) {
    return this.arr.push(value);
  }
  //queue의 전문적인 용어로 빼는 것을 dequeue라고 한다.
  dequeue() {
    return this.arr.shift();
  }

  peek() {
    return this.arr[0]; // 또는 return this.arr.at(0);
  }

  get length() {
    return this.arr.length;
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(5);
// queue.enqueue(3);
// queue.enqueue(7);
// console.log(queue.length); // 5
// queue.dequeue();
// console.log(queue.peek()); // 2
